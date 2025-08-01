// import Link from "next/link";
// import SignOutButton from "./sign-out";
// import { auth } from "../../../auth";
// export default async  function Navbar() {
//
// const session = await auth()
//   if(!session){
// return(
// <Link href={"/register"}>register</Link>
//       <Link href={"/login"}>login</Link>
//
//
// )
//   }
//
//   return (
//     <nav className="bg-slate-600 flex justify-center p-2 m-2 gap-1">
//       <Link href={"/dashboard"}>dashboard</Link>
//       <Link href={"/catatan"}>catatan</Link>
//       <Link href={"/register"}>register</Link>
//       <Link href={"/login"}>login</Link>
//
//       <SignOutButton />
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import SignOutButton from "./sign-out";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-800 shadow-lg"
          : "bg-slate-900/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-xl font-bold text-white">
          StoryApp
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {session ? (
            <>
              <Link
                href="/dashboard"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/catatan"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Catatan
              </Link>
              <SignOutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-800 shadow-lg py-4 px-6">
            <div className="flex flex-col space-y-4">
              {session ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-white hover:text-blue-400 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/catatan"
                    className="text-white hover:text-blue-400 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Catatan
                  </Link>
                  <SignOutButton
                    className="w-full text-left text-white hover:text-blue-400 transition-colors"
                    onClick={closeMobileMenu}
                  />
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-white hover:text-blue-400 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
