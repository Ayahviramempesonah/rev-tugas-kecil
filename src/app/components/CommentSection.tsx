"use client";

import { useFormStatus } from "react-dom";
import { useRef } from "react";
import {
  createCommentAction,
  deleteCommentAction,
  updateCommentAction,
} from "../actions";
import { auth } from "../../../auth";

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
  currentUserId: string | undefined;
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
  // const session = auth();
  // if (!session) return null;
  const formRef = useRef<HTMLFormElement>(null);

  const createCommentWithStoryId = createCommentAction.bind(null, storyId);

  const handleActionn = async (formdata: FormData) => {
    await createCommentWithStoryId(formdata);
    formRef.current?.reset();
  };

  // handler function edit comment
  const handleedit = async (comment: Comment) => {
    const newText = prompt("edit komentar anda", comment.text);

    if (newText === null || !newText.trim()) {
      return;
    }
    const formData = new FormData();
    formData.append("content", newText.trim());

    await updateCommentAction(comment.id, storyId, formData);
  };

  // const formData = new FormData();
  // formData.append("content", newText.trim());
  //
  // await updateCommentAction(commentId, storyId, formData);
  //
  return (
    <div className="mt-4 pt-4 border-t">
      <h4 className="font-semibold text-sm mb-2 ">
        komentar ({Comments.length})
      </h4>
      <form
        ref={formRef}
        action={handleActionn}
        className="flex items-center mb-6"
      >
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
              <div className="flex gap-2 px-4">
                <button
                  onClick={() => handleedit(comment)}
                  className="text-yellow-500 hover:text-yellow-400 text-xs font-semibold"
                >
                  edit
                </button>
                <button
                  className="text-red-500 hover:text-red-400"
                  onClick={() => deleteCommentAction(comment.id, storyId)}
                >
                  hapus
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
