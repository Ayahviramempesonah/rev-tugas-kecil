"use client";

export default function Page() {
  return (
    <main className="bg-slate-400">
      <h1>halaman publik</h1>
    </main>
  );
}

// import { auth, signIn, signOut } from "@/../auth";
//
// async function AuthButton() {
//   const session = await auth();
//
//   if (session?.user) {
//     return (
//       <form
//         action={async () => {
//           "use server";
//           await signOut();
//         }}
//       >
//         <button
//           type="submit"
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Sign Out
//         </button>
//       </form>
//     );
//   }
//
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signIn();
//       }}
//     >
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Sign In
//       </button>
//     </form>
//   );
// }
//
// export default async function Home() {
//   const session = await auth();
//
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
//       <div className="text-center">
//         {session?.user ? (
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">
//               Selamat Datang, {session.user.name}!
//             </h1>
//             <p className="text-gray-600 mt-2">Anda berhasil login.</p>
//           </div>
//         ) : (
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">
//               Anda Belum Login
//             </h1>
//             <p className="text-gray-600 mt-2">
//               Silakan login untuk melanjutkan.
//             </p>
//           </div>
//         )}
//         <div className="mt-8">
//           <AuthButton />
//         </div>
//       </div>
//     </main>
//   );
// }
