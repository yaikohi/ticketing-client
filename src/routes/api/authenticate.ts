import { AuthServicePurposeType } from "@/lib/types";
import { APIEvent } from "@solidjs/start/server/types";
import { authenticate } from "@/lib/server";

type POST = {
  purpose: AuthServicePurposeType;
  email: string;
  password: string;
};
export async function POST(event: APIEvent) {
  "use server";
  const { purpose, email, password } = await event.request.json();
  console.log({ message: `Running 'authenticate' function on the server!` });
  const response = await authenticate({ purpose, email, password });
  console.dir({ response });
  return response;
}
