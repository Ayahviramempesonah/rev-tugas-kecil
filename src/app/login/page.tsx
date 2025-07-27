// "use client";

import SignInForm from "../components/sign-in";

export default function LoginPage() {
  return (
    <main className="bg-slate-600 text-center">
      <div>Login</div>
      <SignInForm />
    </main>
  );
}

// import { signIn } from "next-auth/react";
// import { useState } from "react";
//

// function SignInForm() {
//   const [email, setEmail] = useState("user@example.com");
//   const [password, setPassword] = useState("password");
//
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await signIn("credentials", {
//       email,
//       password,
//       redirectTo: "/",
//     });
//   };
//
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-md"
//     >
//       <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
//       <div className="flex flex-col">
//         <label className="text-gray-600" htmlFor="email">
//           Email
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border rounded px-3 py-2 mt-1 text-gray-700"
//           required
//         />
//       </div>
//       <div className="flex flex-col">
//         <label className="text-gray-600" htmlFor="password">
//           Password
//         </label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border rounded px-3 py-2 mt-1 text-gray-700"
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Log In
//       </button>
//     </form>
//   );
// }
//
// export default function SignInPage() {
//   return (
//     <div className="flex h-screen w-full items-center justify-center bg-gray-100">
//       <SignInForm />
//     </div>
//   );
// }
