import { listUsers } from "@/lib/fetchUser";

export function GET() {
  const users = listUsers();
  return Response.json({ success: true, users });
}
