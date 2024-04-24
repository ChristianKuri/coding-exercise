import { findUser } from "@/lib/fetchUser";
import { error } from "console";

export function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const user = findUser(id);

  if (!user) {
    return Response.json({
      success: false,
      error: "User not found",
    });
  }

  return Response.json({ success: true, user });
}
