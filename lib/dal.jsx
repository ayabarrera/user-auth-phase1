import 'server-only';
import { cookies } from "next/headers";
import client from "@/lib/directus";
import { readMe } from "@directus/sdk";
import { redirect } from "next/navigation";

export async function getUserData() {
  try {
    const token = cookies().get("directus_session_token")?.value;
    console.log("Token:", token);

    if (!token) {
      console.log("No token found. Redirecting...");
      redirect("/login");
    }

    client.setToken(token);

    const user = await client.request(readMe({ fields: ["id", "first_name"] }));

    if (!user?.first_name) {
      console.log("⚠️ first_name is missing from response. Check Directus permissions.");
    }

    return { success: true, user };
  } catch (error) {
    console.error("Error fetching user data:", error);
    redirect("/login");
  }
}
