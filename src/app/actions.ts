"use server";

import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function registerUserAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  // if (!name || !email || !password) {
  //   throw new Error("semua field wajib diisi");
  // }
  const existingUser = await prisma.user.findUnique({
    where: { email},
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
