"use server";
import { AuthServicePurposeType } from "@/lib/types";
import { getAuthServiceUrl } from "@/lib/utils";
import { redirect } from "@solidjs/router";
import { useSession } from "vinxi/http";
import { getRequestEvent } from "solid-js/web";

interface IUser {
  id: string;
  email: string;
  // password: string;
}
interface UserSession {
  token?: SessionToken;
}
type SessionToken = `Bearer ${string}`;

function getSession() {
  "use server";
  return useSession(getRequestEvent()!, {
    password: process.env.SESSION_SECRET ??
      "blablablablablablablablablablablablablabla",
  });
}

export async function authenticate({
  purpose,
  email,
  password,
}: {
  purpose: AuthServicePurposeType;
  email: string;
  password: string;
}): Promise<any> {
  "use server";
  const URL = getAuthServiceUrl({ purpose });
  console.log(`Fetching data from /users/${purpose}`);

  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  console.log("getting session");

  const session = await getSession();
  console.log("parsing json from response");

  const result = await response.json();
  console.log("updating session");

  await session.update((
    d: UserSession,
  ) => {
    console.dir({ headers: response.headers });
    const token = response.headers.get("Authorization") as SessionToken;

    console.log({ token });
    d.token = token;
  });
  console.dir({ result });
  return result;
}

export async function getCurrentUser(): Promise<
  IUser | undefined
> {
  "use server";
  const URL = getAuthServiceUrl({ purpose: "current-user" });
  const bearerToken = (await getSession()).data.token as UserSession;
  // console.log({ bearerToken });

  if (!bearerToken) {
    console.log("Sign in first.");
    return;
  }
  const response = await fetch(URL, {
    method: "GET",
    headers: { "authorization": `${bearerToken}` },
  });
  // console.dir({ response });
  const user = await response.json();
  return user;
}

export async function logout() {
  "use server";
  const session = await getSession();
  await session.update((d) => (d.userId = undefined));
  throw redirect("/");
}

export async function getUser(): Promise<IUser | void> {
  const session = await getSession();
  const userId = session.data.userId;
  if (userId === undefined) throw redirect("/login");

  let user;
  try {
    user = await getCurrentUser();
  } catch {
    logout();
  }
  if (!user) return logout();
  return { id: user.id, email: user.email };
}
