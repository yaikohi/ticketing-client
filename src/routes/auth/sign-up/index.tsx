import { Button } from "@/components/ui/button";
import { TextField, TextFieldInput } from "@/components/ui/textfield";
import { createSignal } from "solid-js";

const URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:5000/api/users/sign-up`
    : `https://ticketing.dev/api/users/sign-up`;

export default function SignUpPage() {
  const [password, setPassword] = createSignal("");
  const [email, setEmail] = createSignal("");

  const onSignUp = async (event: Event) => {
    event.preventDefault();
    const signUpFormData = { email: email(), password: password() };
    console.log(`Sending form to ${URL}`);
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(signUpFormData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <main class="mx-auto max-w-md flex flex-col gap-12 text-center p-4">
      <h1>Sign up</h1>
      <form
        class="flex flex-col gap-2 max-w-md"
        onSubmit={onSignUp}
        method="post"
      >
        <TextField>
          <TextFieldInput
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </TextField>

        <TextField>
          <TextFieldInput
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password123"
          />
        </TextField>

        <Button type="submit" size={"lg"} variant={"default"}>
          Submit
        </Button>
      </form>
      <p class="muted">farewell,</p>
    </main>
  );
}
