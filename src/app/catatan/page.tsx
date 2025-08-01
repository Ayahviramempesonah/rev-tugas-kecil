import { createCatatan } from "../actions";
import prisma from "../lib/prisma";
import CatatanItem from "../components/CatatanItem";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
export default async function CatatanPage() {
  const session = await auth();
  if (!session) {
    redirect("login");
  }

  const allCatatan = await prisma.catatan.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container mx-auto p-8 bg-slate-600">
      <h1 className="text-4xl font-bold text-center mb-8"></h1>

      <div className="mb-8 p-6 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Create New Note</h2>
        <form
          action={createCatatan}
          className="flex flex-col 
      space-y-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="border p-3 rounded-md text-black"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="border p-3 rounded-md text-black"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md 
      hover:bg-green-600 self-start"
          >
            Create
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-6">All Notes</h2>
        {allCatatan.length > 0 ? (
          allCatatan.map((catatan) => (
            <CatatanItem key={catatan.id} catatan={catatan} />
          ))
        ) : (
          <p className="text-center text-gray-500">No notes yet. Create one!</p>
        )}
      </div>
    </div>
  );
}
