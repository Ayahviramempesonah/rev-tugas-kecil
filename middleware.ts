// master;
export { auth as middleware } from "./auth";

export const config = {
  matcher: ["/dashboard/:path*"],
  // unstable_allowDynamic: [
  //   "/lib/utilities.js",
  //   "**/node_modules/function-bind/**",
  // ],
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
// sampai sini master
