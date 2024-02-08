import { getRequestEvent } from "solid-js/web";
import { HTTPEvent, useSession } from "@solidjs/start/server";
//
// interface IUser {
//   id: string;
//   email: string;
// }
// export async function getCurrentUser(request: Request): Promise<IUser | null> {
//   const event = getRequestEvent() as HTTPEvent;
//   console.log({ event });
//
//   const session = await useSession(event, {
//     password: "blabla",
//   });
//   console.log({ session });
//   const userId = session.data.userId;
//
//   if (!userId) return null;
//
//   return null;
// }
