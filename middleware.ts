import { NextResponse, type NextRequest } from "next/server";
import { LANG_COOKIE } from "@/lib/langCookie";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lang = pathname === "/en" || pathname.startsWith("/en/")
    ? "en"
    : pathname === "/ar" || pathname.startsWith("/ar/")
      ? "ar"
      : null;

  if (!lang) return NextResponse.next();

  const response = NextResponse.next();
  response.cookies.set(LANG_COOKIE, lang, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/en", "/en/:path*", "/ar", "/ar/:path*"],
};
