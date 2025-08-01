"use client";

import { useState } from "react";
import { deleteCatatan, updateCatatan } from "../actions";

type Catatan = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
};

export default function CatatanItem({ catatan }: { catatan: Catatan }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(catatan.title);
  const [description, setDescription] = useState(catatan.description);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    await updateCatatan(catatan.id, formData);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await deleteCatatan(catatan.id);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-sm mb-4">
      {isEditing ? (
        <form
          onSubmit={handleUpdate}
          className="flex flex-col 
      space-y-2"
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded-md text-black"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded-md text-black"
            rows={3}
            required
          ></textarea>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-blue-500 text-white 
      px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 text-black px-4 py-2 rounded-md
      hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2 className="text-2xl font-bold">{catatan.title}</h2>
          <p className="mt-2 text-gray-300">{catatan.description}</p>
          {/* <small className="text-gray-500">{new Date(catatan.createdAt).()}</small> */}
          <div className="flex space-x-2 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-4 py-2 
      rounded-md hover:bg-yellow-600"
            >
              Edit
            </button>
            <form action={handleDelete} className="inline">
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-md 
      hover:bg-red-600"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
