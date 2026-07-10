import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LANG_COOKIE } from "@/lib/langCookie";

export default async function RootPage() {
  const cookieStore = await cookies();
  const preferred = cookieStore.get(LANG_COOKIE)?.value;
  redirect(preferred === "en" ? "/en" : "/ar");
}
