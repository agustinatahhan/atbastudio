// This file is intentionally left minimal.
// The middleware (middleware.ts) redirects all root requests to /[locale].
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en");
}
