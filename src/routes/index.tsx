import { createEffect, createResource } from "solid-js";
import { useGetCurrentUser } from "@/components/user-card";

export default function Home() {
  const [currentUser] = createResource(() => useGetCurrentUser());
  createEffect(() => console.log(currentUser()));
  return (
    <main class="text-center mx-auto p-4">
      <h1 class="font-bold text-sky-700">Ticketing client</h1>
      <div></div>
    </main>
  );
}
