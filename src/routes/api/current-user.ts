import { getCurrentUser } from "@/lib/server";

export async function GET() {
  try {
    const user = await getCurrentUser();
    return user;
  } catch (err) {
    console.error(err);
  }
}
