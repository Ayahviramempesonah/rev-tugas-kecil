"use client";

import { registerUserAction } from "../actions";

export default function RegisterPage() {
  return (
    <main className="bg-slate-600 text-center text-white flex flex-col gap-4">
      <div>
        <h1>Register </h1>
        <form
          action={registerUserAction}
          className="flex flex-col gap-4 p-8 rounde-lg mx-auto w-full max-w-sm "
        >
          <div className="rounded-md text-white ">
            <label htmlFor="name" className="mb-1 text-sm font-medium">
              Nama
            </label>
            <input
              type="text"
              name="name"
              required
              id="name"
              className="bg-slate-800 px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="bg-slate-800 px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              required
              name="password"
              className="bg-slate-800 px-3 py-2 rounded-md"
            />
          </div>
          <button type="submit" className="bg-blue-600 px-3 py-2 rounded-md">
            Daftar
          </button>
        </form>
      </div>
    </main>
  );
}
