"use server";

import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { auth } from "../../auth";
import { th } from "zod/locales";
import NextAuth from "next-auth";
import { string } from "zod/mini";

// start catatan
export async function createCatatan(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  await prisma.catatan.create({
    data: {
      title,
      description,
    },
  });
  revalidatePath("/catatan");
}

export async function deleteCatatan(id: string) {
  await prisma.catatan.delete({
    where: {
      id,
    },
  });
  revalidatePath("/catatan");
}

export async function updateCatatan(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  await prisma.catatan.update({
    where: {
      id: id,
    },
    data: {
      title,
      description,
    },
  });
  revalidatePath("/catatan");
}

export async function registerUserAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!name || !email || !password) {
    throw new Error("semua field wajib diisi");
  }
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    throw new Error("email sudah terdaftar");
  }

  const hashedPassword = await bcrypt.hash(password, 6);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  redirect("/login");
}

export async function createStoryAction(formData: FormData) {
  //todo cek kondisi auth ,jika belum auth redirect ke "login"
  const session = await auth();
  console.log("auth  ", session);
  if (!session?.user?.id) {
    throw new Error("anda harus login untuk membuat cerita");
    // redirect("/login");
  }
  //ambil data dari formData
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const imageFile = formData.get("image") as File;

  //todo buat validasi jika title,description,dan imageFile belum diisi berikan alert untuk isi terlebih dahulu
  if (!title || !description || !imageFile || imageFile.size === 0) {
    throw new Error("title ,description and image are required");
  }
  // buat instansi blob untuk disimpan di vecel blob
  const blob = await put(imageFile.name, imageFile, {
    access: "public",
    addRandomSuffix: true,
  });

  await prisma.story.create({
    data: {
      title,
      description,
      imageUrl: blob.url,
      authorId: session.user.id,
    },
  });
  console.log("data create prisma", prisma);
  revalidatePath("/dashboard");
  // redirect("/dashboard");
}
// action untuk menghapus story
export async function deleteStoryAction(storyId: string) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("otentikasi di perlukan");
  }

  const story = await prisma.story.findUnique({
    where: {
      id: storyId,
    },
    // select: {
    //   authorId: true,
    // },
  });
  if (!story) {
    throw new Error("tidak ada story");
  }

  try {
    if (!story || story.authorId !== session.user.id) {
      throw new Error(
        "cerita tidak ditemukan atau anda tidak berhak menghapusnya",
      );
    }
    // await del(story.imageUrl);
    // await prisma.story.delete({
    //     where: {
    //       id: storyId,
    //     },
    //   });
    //   revalidatePath("/dashboard");
    // }
  } catch (error) {
    console.log("dont acces delete");
  }

  if (story.authorId !== session.user.id) {
    throw new Error(
      "cerita tidak ditemukan atau anda tidak berhak menghapusnya",
    );
  }

  await del(story.imageUrl);

  // if (deleteVercelBlob !== story.authorId) {
  //   throw new Error("no access  to delete");
  // }

  // menghapus story dari database berdasrakan id yang menerima storyId dari formData
  await prisma.story.delete({
    where: {
      id: storyId,
    },
  });
  revalidatePath("/dashboard");
}

// action untuk update story
export async function updateStoryAction(storyId: string, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("otentikasi diperlukan");
  }
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  if (!title || !description) {
    throw new Error("form tidak boleh kosong");
  }

  //todo buat pengecekan kepemilikan sebelum update
  const story = await prisma.story.findUnique({
    where: {
      id: storyId,
    },
  });

  if (!story || story?.authorId !== session?.user?.id) {
    throw new Error("story tidak ada atau anda tidak berhak mengupdatenya");
  }

  // logic untuk update database dari prisma
  await prisma.story.update({
    where: {
      id: storyId,
    },
    data: {
      title,
      description,
    },
  });

  revalidatePath("/dashboard");
}

export async function createCommentAction(storyId: string, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("anda harus login untuk berkomentar");
  }

  const text = formData.get("commentText") as string;
  if (!text || text.trim() === "") {
    throw new Error("komentar tidak boleh kosong");
  }
  await prisma.comment.create({
    data: {
      text: text.trim(),
      authorId: session.user.id,
      StoryId: storyId,
    },
  });

  revalidatePath("/dashboard");
}

export async function deleteCommentAction(commentId: string) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("otentikasi di perlukan");
  }
  //
  const comment = await prisma.comment.findUnique({
    where: {
      id: commentId,
    },
    select: {
      authorId: true,
    },
  });

  if (!comment || comment?.authorId !== session.user.id) {
    throw new Error("komentar tidak ditemukan atau anda tidak punya hak akses");
  }

  await prisma.comment.delete({
    where: {
      id: commentId,
    },
  });
  revalidatePath("/dashboard");
}
