import { auth } from "../../../../auth";
import { notFound, redirect } from "next/navigation";
import prisma from "@/app/lib/prisma";
import CommentSection from "@/app/components/CommentSection";
// import { cuid } from "zod";
// interface PageProps {
//   params: Promise<{
//     storyId: string;
//   }>;
// }
interface PageProps {
  params: Promise<{
    storyId: string;
  }>;
}

export default async function StoryIdPage({ params }: PageProps) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const { storyId } = await params;

  const currentUserId = session?.user?.id;

  // const { storyId } = await params;

  const story = await prisma.story.findUnique({
    where: {
      id: storyId,
    },
    include: {
      author: true,
      comments: {
        include: {
          author: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!story) {
    notFound();
  }

  // const { storyId } = params;
  return (
    <div className="items-center p-8 mb-8">
      {/* <h1>{story.title}</h1> */}
      <img
        src={story.imageUrl}
        alt="story.title"
        width={250}
        height={250}
        className="p-8 items-center"
      />
      <h1> Di Posting Oleh:{story.author.name}</h1>
      <h1>Title: {story.title}</h1>
      <p> Story: {story.description}</p>
      <hr className="border-gray-700 " />

      <CommentSection
        storyId={story.id}
        Comments={story.comments}
        currentUserId={currentUserId}
      />
    </div>
  );
}
