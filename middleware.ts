export { auth as middleware } from "@/../auth";

// Gunakan matcher untuk menentukan
// rute mana yang akan dilindungi
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
