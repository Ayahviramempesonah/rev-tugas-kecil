// import NextAuth from "next-auth";
import { auth } from "../../../auth";
import SignOutButton from "../components/sign-out";
import { redirect } from "next/navigation";
export default async function DashboardPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
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
      <SignOutButton />
    </main>
  );
}
