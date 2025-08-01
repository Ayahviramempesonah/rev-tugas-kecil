"use client";

import { useFormStatus } from "react-dom";
import { useRef } from "react";
import { createCommentAction, deleteCommentAction } from "../actions";

type Comment = {
  id: string;
  text: string;
  createdAt: Date;
  author: {
    id: string;
    name: string | null;
  };
};

type CommentSectionProps = {
  storyId: string;
  Comments: Comment[];
  currentUserId: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-indigo-600 text-white px-3 py-1 text-sm rounded-md disabled:opacity-50"
    >
      {pending ? "mengirim" : "kirim"}
    </button>
  );
}

export default function CommentSection({
  storyId,
  Comments,
  currentUserId,
}: CommentSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const createCommentWithStoryId = createCommentAction.bind(null, storyId);

  const handleActin = async (formdata: FormData) => {
    await createCommentWithStoryId(formdata);
    formRef.current?.reset();
  };
  return (
    <div className="mt-4 pt-4 border-t">
      <h4 className="font-semibold text-sm mb-2 ">
        komentar ({Comments.length})
      </h4>
      <form>
        <input
          required
          type="text"
          name="commentText"
          placeholder="tulis komentar..."
          className="flex-grow border rounded-md px-2 py-1 text-sm "
        />
        <SubmitButton />
      </form>

      <div className="space-y-3 ">
        {" "}
        {Comments.map((comment) => (
          <div
            key={comment.id}
            className="text-sm flex justify-between items-start"
          >
            <div>
              <span className="font-bold">{comment.author.name || "User"}</span>

              <p className="inline ml-2 text-gray-700 ">{comment.text}</p>
            </div>
            {comment.author.id === currentUserId && (
              <form action={deleteCommentAction.bind(null, comment.id)}>
                <button
                  type="submit"
                  className="text-red-500 hover:text-red-700 text-xs "
                >
                  hapus
                </button>
              </form>
            )}
            {/* <span className="font-bold">{comment.author.name || "User"}</span> */}
            {/* <p className="inline ml-2 text-gray-700 ">{comment.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
