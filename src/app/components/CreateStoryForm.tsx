// component form CreateStoryForm
"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { createStoryAction } from "../actions";
import ImageUpload from "./image-upload";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none disabled:opacity-50"
    >
      {pending ? "Mengirim..." : "Buat Cerita"}
    </button>
  );
}

export default function CreateStoryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleAction = async (formData: FormData) => {
    try {
      // Add the selected image to form data if it exists
      if (selectedImage) {
        formData.set("image", selectedImage);
      }

      await createStoryAction(formData);
      formRef.current?.reset();
      setSelectedImage(null);
    } catch (error) {
      console.log("Error handle submit", error);
    }
  };

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
  };

  return (
    <div className="w-full rounded shadow-md px-8 mb-4">
      <h2 className="mb-4 font-bold text-xl">Buat Cerita Baru</h2>
      <form ref={formRef} action={handleAction} className="space-y-6">
        <div>
          <label className="block font-bold text-gray-700 mb-2" htmlFor="title">
            Judul
          </label>
          <input
            required
            type="text"
            name="title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Masukkan judul cerita..."
          />
        </div>

        <div>
          <label
            className="block font-bold text-gray-700 mb-2"
            htmlFor="description"
          >
            Deskripsi
          </label>
          <textarea
            required
            name="description"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Ceritakan tentang gambar Anda..."
          />
        </div>

        <ImageUpload onImageSelect={handleImageSelect} />

        <div className="pt-4">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
