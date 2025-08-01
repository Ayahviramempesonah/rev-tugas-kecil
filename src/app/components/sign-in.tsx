// import { signIn } from "@/auth"
"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      setError("email atau password salah");
    } else {
      router.replace("/dashboard");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-600 flex-col gap-4 rounded-lg shadow:md mx-auto m-2 p-8  "
    >
      {error && <p className="text-red-600 text-center">{error}</p>}
      <div>
        <label
          className="mb-1 text-sm  font-medium flex flex-col"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="bg-slate-800 text-white border border-slate-600 rounded-md px-3 py-2 focus:outline-none  focus:ring-2 focus:ring-blue-500"
          type="email "
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-1 text-sm font-medium flex flex-col"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          className=" bg-slate-800 text-white border border-slate-600 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button
          className="rounded-md bg-blue-600  py-2 px-4 text-white "
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
}
