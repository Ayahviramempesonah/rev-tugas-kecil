// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
// import { auth } from "./auth";

// master;
// export { auth as middleware } from "./auth";
//
// export const config = {
//   // matcher: ["/dashboard/:path*"],
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
// sampai sini master

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
  // Log ini akan muncul setiap kali middleware dipanggil oleh Next.js
  // console.log(`\n--- Middleware Dipanggil ---`);
  // console.log(`Path: ${request.nextUrl.pathname}`);
  // console.log(`Waktu: ${new Date().toLocaleTimeString()}`);
  console.log(
    `\n✅ MIDDLEWARE BERJALAN: Mengakses path ${request.nextUrl.pathname}\n`,
  );

  // Periksa apakah AUTH_SECRET sudah dimuat
  console.log(
    `AUTH_SECRET: ${process.env.AUTH_SECRET ? "✅ Terdeteksi" : "❌ TIDAK DITEMUKAN!"}`,
  );

  const session = await auth();
  // Cetak status sesi untuk melihat apa yang dikembalikan oleh fungsi auth()
  console.log("Status Sesi:", session ? "👤 Ditemukan" : "👻 Tidak ada sesi");

  const { pathname } = request.nextUrl;
  const isUserLoggedIn = !!session;

  // Evaluasi logika perlindungan
  if (pathname.startsWith("/dashboard")) {
    console.log("Mengevaluasi rute /dashboard...");
    if (!isUserLoggedIn) {
      console.log(
        "🔴 AKSES DITOLAK: Pengguna tidak login, mengalihkan ke /login.",
      );
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      console.log("🟢 AKSES DIIZINKAN: Pengguna sudah login.");
    }
  }

  console.log("--- Middleware Selesai ---\n");
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
         * Cocokkan semua path permintaan kecuali
      untuk:
         * - rute API
         * - _next/static
         * - _next/image
         * - favicon.ico
         */

    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

// export async function middleware(request: NextRequest) {
//   const session = await auth();
//   if (!session) {
//     const loginUrl = new URL("/login", request.url);
//     return NextResponse.redirect(loginUrl);
//   }
//   return NextResponse.next();
// }

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
//
// // 'next/server';
//
// // Middleware ini akan berjalan untuk
// // setiap rute yang cocok dengan matcher.
// export function middleware(request: NextRequest) {
//   // Cetak log ke terminal server untuk
//   // memastikan file ini dieksekusi.
//   console.log(`Middleware berjalan untuk
//       path: ${request.nextUrl.pathname}`);
//
//   // Jika path dimulai dengan /dashboard,
//   // langsung alihkan ke /login.
//   // Ini adalah tes untuk melihat apakah
//   // middleware aktif.
//   if (request.nextUrl.pathname.startsWith("/dashboard")) {
//     console.log("Path /dashboard terdeteksi, mencoba mengalihkan...");
//
//     // terdeteksi, mencoba mengalihkan...');
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//
//   // Untuk semua rute lain, lanjutkan
//   // seperti biasa.
//   return NextResponse.next();
// }
//
// // Konfigurasi matcher tetap sama.
// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
