"use client";
import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { createStoryAction } from "../actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounde focus:outline-none disabled:opacity-50"
    >
      {pending ? "mengirim..." : "buat cerita"}
    </button>
  );
}

export default function CreateStoryForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleAction = async (formData: FormData) => {
    try {
      await createStoryAction(formData);
      formRef.current?.reset();
    } catch (error) {
      console.log("error handle submit", error);
    }
  };

  return (
    <div className="w-full rounded shadow-md px-8 mb-4">
      <h2 className="mb-4 font-bold     ">buat cerita baru</h2>
      <form ref={formRef} action={handleAction} className="space-y-4">
        <div>
          <label className="block font-bold" htmlFor="title">
            title
          </label>
          <input required type="text" name="title" className="shadow" />
        </div>
        <div>
          <label className="block font-bold" htmlFor="description">
            description
          </label>
          <input required type="text" name="description" className="shadow" />
        </div>
        <div>
          <label className="block font-bold " htmlFor="image">
            gambar
          </label>
          <input
            required
            type="file"
            accept="image/*"
            name="image"
            className="shadow  border "
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
