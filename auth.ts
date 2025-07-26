import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    Credentials({
      // Anda dapat menambahkan form kustom atau menggunakan
      // halaman login bawaan
      // dengan memberikan `authorize` function ini.
      async authorize(credentials) {
        // Logika untuk memvalidasi kredensial pengguna
        // Di sini, kita hanya melakukan validasi sederhana.
        // Di aplikasi nyata, Anda akan memeriksa kredensial ini
        // dengan database Anda.
        if (
          credentials.email === "user@example.com" &&
          credentials.password === "password"
        ) {
          // Jika valid, kembalikan objek user
          return { id: "1", name: "Ayahtamvan", email: "user@example.com" };
        }
        // Jika tidak valid, kembalikan null
        return null;
      },
    }),
  ],
  callbacks: {
    // Callback ini digunakan untuk mengontrol apa yang terjadi
    // saat tindakan terkait autentikasi dilakukan.
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      // Jika pengguna berada di halaman yang memerlukan
      // autentikasi,
      // periksa apakah mereka sudah login.
      if (pathname.startsWith("/admin")) {
        // Contoh: melindungi
        // rute /admin
        return !!auth; // Mengembalikan true jika `auth` ada (user
        // login), false jika tidak
      }
      return true; // Izinkan akses untuk rute lain
    },
  },
  // Menentukan halaman login kustom
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
