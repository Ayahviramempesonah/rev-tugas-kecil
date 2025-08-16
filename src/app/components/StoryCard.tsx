"use client";

import Image from "next/image";
// import { type } from "os";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { deleteStoryAction, updateStoryAction } from "../actions";
import CommentSection from "./CommentSection";
import { useSession } from "next-auth/react";
import Link from "next/link";

type StoryProps = {
  story: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    authorId: string;
    comments: {
      id: string;
      text: string;
      createdAt: Date;
      author: {
        id: string;
        name: string | null;
      };
    }[];
  };
  currentUserId: string;
};

function EditForm({
  story,
  onCancel,
}: {
  story: StoryProps["story"];
  onCancel: () => void;
}) {
  const { pending } = useFormStatus();
  // const handeSubmit = async (fromData: FormData) => {
  //   await updateStoryAction(story.id, FormData);
  //   onCancel;
  // };
  return (
    <form
      action={updateStoryAction.bind(null, story.id)}
      onSubmit={onCancel}
      className="space-y-2 mt-4"
    >
      <input
        name="title"
        defaultValue={story.title}
        className="shadow rounded border "
        required
      />
      <textarea
        name="description"
        required
        defaultValue={story.description}
        className="shadow rounded"
      ></textarea>
      <div className="flex gap-2 ">
        <button
          type="submit"
          disabled={pending}
          className="bg-blue-500 text-white disabled:opacity-50"
        >
          {pending ? "menyimpan" : "simpan"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white rounded "
        >
          Batal
        </button>
      </div>
    </form>
  );
}

export default function StoryCard({ story }: StoryProps) {
  const [isEditing, setIsEditing] = useState(false);
  const { data: session } = useSession();
  const currentUserId = session?.user?.id;

  return (
    <div className="border rounded-lg overflow-hidden shadow-md flex flex-col h-full ">
      <div className="relative w-full aspect-video">
        <Link href={`/story/${story.id}`}>
          <Image
            src={story.imageUrl}
            alt={story.title}
            width={500}
            height={300}
            className="object-cover"
          />
        </Link>
      </div>
      <div className=" p-4 flex flex-col flex-grow">
        {!isEditing ? (
          <>
            <h3 className="text-lg font-bold">{story.title}</h3>
            <p className="mt-1 text-gray-600">{story.description}</p>
            {story.authorId === currentUserId && (
              <div className="flex gap-2 mt-auto pt-4 items-center">
                {/* <div className="flex gap-4  p-2 items-center"> */}
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-yellow-500 rounded text-white py-2 px-4 text-sm  m-1 "
                >
                  edit
                </button>
                <button
                  onClick={deleteStoryAction.bind(null, story.id)}
                  type="submit"
                  className="bg-red-500 rounded text-white py-2 px-4 text-sm  m-1"
                >
                  hapus
                </button>
                {/* </div> */}
              </div>
            )}
          </>
        ) : (
          <EditForm story={story} onCancel={() => setIsEditing(false)} />
        )}
      </div>
    </div>
  );
}
