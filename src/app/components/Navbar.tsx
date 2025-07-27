import Link from "next/link";
import SignOutButton from "./sign-out";
export default function Navbar() {
  return (
    <nav className="bg-slate-600 flex justify-center p-2 m-2 gap-1">
      {/* <Link href={"/home"}>Home</Link> */}
      <Link href={"/dashboard"}>dashboard</Link>
      <Link href={"/register"}>register</Link>
      <Link href={"/login"}>login</Link>
      <SignOutButton />
    </nav>
  );
}
