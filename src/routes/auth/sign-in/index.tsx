import { AuthDialog } from "@/components/sign-in";

export default function SignInPage() {
  return (
    <main class="mx-auto max-w-md flex flex-col gap-12 text-center p-4">
      <h1 class="">Sign in</h1>
      <AuthDialog />
    </main>
  );
}
