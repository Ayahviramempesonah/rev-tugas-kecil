"use client";

import { registerUserAction } from "../actions";

export default function RegisterPage() {
  return (
    <main className="bg-slate-600 text-center text-white flex flex-col gap-4 p-8">
      <div>
        {/* <h1>Register </h1> */}
        <form
          action={registerUserAction}
          className="flex flex-col gap-4 p-8 rounde-lg mx-auto w-full max-w-sm "
        >
          <div className="rounded-md text-white gap-1 ">
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

//
// "use client";
//
// import { registerUserAction } from "../actions";
// import { useFormState, useFormStatus } from "react-dom";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
//
// export default function RegisterPage() {
//   const [state, formAction] = useFormState(registerUserAction, null);
//   const { pending } = useFormStatus();
//   const router = useRouter();
//
//   useEffect(() => {
//     if (state?.success) {
//       router.push("/login");
//     }
//   }, [state, router]);
//
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-600 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-slate-700 rounded-xl shadow-lg overflow-hidden">
//         <div className="p-8">
//           <h1 className="text-2xl font-bold text-center mb-6">
//             Daftar Akun Baru
//           </h1>
//
//           {state?.error && (
//             <div className="mb-4 p-3 bg-red-500/20 text-red-300 text-sm rounded-md">
//               {state.error}
//             </div>
//           )}
//
//           <form action={formAction} className="space-y-5">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium mb-1">
//                 Nama Lengkap
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 id="name"
//                 className="w-full bg-slate-800 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md px-4 py-2 transition"
//                 placeholder="Masukkan nama lengkap"
//               />
//             </div>
//
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium mb-1">
//                 Alamat Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 id="email"
//                 className="w-full bg-slate-800 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md px-4 py-2 transition"
//                 placeholder="contoh@email.com"
//               />
//             </div>
//
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium mb-1"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 required
//                 name="password"
//                 id="password"
//                 minLength={6}
//                 className="w-full bg-slate-800 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md px-4 py-2 transition"
//                 placeholder="Minimal 6 karakter"
//               />
//             </div>
//
//             <button
//               type="submit"
//               disabled={pending}
//               className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition flex justify-center items-center"
//             >
//               {pending ? (
//                 <span className="flex items-center">
//                   <svg
//                     className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     ></path>
//                   </svg>
//                   Memproses...
//                 </span>
//               ) : (
//                 "Daftar Sekarang"
//               )}
//             </button>
//           </form>
//
//           <div className="mt-6 text-center text-sm text-slate-300">
//             Sudah punya akun?{" "}
//             <Link
//               href="/login"
//               className="text-blue-400 hover:text-blue-300 font-medium"
//             >
//               Masuk disini
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
