// import NextAuth from "next-auth";
import { auth } from "../../../auth";
import SignOutButton from "../components/sign-out";
import { redirect } from "next/navigation";
import CreateStoryForm from "../components/CreateStoryForm";
import prisma from "../lib/prisma";
import StoryCard from "../components/StoryCard";
import { string } from "zod";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const stories = await prisma.story.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="bg-slate-400 text-center">
      <div>
        <h1>ini adalah area rahasia</h1>
        <h1>hallo ganteng</h1>
      </div>
      <div>
        <h2>welcome {session?.user?.name}</h2>
        <h2>email anda {session?.user?.email}</h2>
      </div>
      {/* <SignOutButton /> */}
      <CreateStoryForm />
      <hr />
      <h2>Cerita Anda</h2>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 m-1">
        {stories.length === 0 ? (
          <p>jadilah yang pertama membuat cerita</p>
        ) : (
          stories.map((story) => <StoryCard key={story.id} story={story} />)
        )}
      </div>
    </main>
  );
}
