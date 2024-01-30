import { action, useAction } from "@solidjs/router";
import { createSignal } from "solid-js";

interface SignUpProps {
  email: string;
  password: string;
}
// const onSignUp = action(async (formData: FormData) => {
//   "use server";
//
//   console.log({ values: formData.values() });
// });

const URL = process.env.NODE_ENV === "development"
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
    <main class="mx-auto p-4">
      <div class="flex flex-col">
        <h1>Sign up</h1>
        <form onSubmit={onSignUp} method="post">
          {/* INPUT --- EMAIL */}
          <div class="flex flex-col items-start bg-zinc-200 my-2 py-2">
            <label>Email</label>
            <input
              class="px-3 py-2 bg-slate-300 rounded-md w-full"
              value={email()}
              name="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
                // checkInput();
              }}
            />
          </div>

          {/* INPUT --- PASSWORD */}
          <div class="flex flex-col items-start bg-zinc-200 my-2 py-2">
            <label>Password</label>
            <input
              class="px-3 py-2  bg-slate-300 rounded-md w-full"
              value={password()}
              name="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                // checkInput();
              }}
            />
          </div>
          <button aria-label={`Sign-up for Ticketing.`}>Submit</button>
        </form>
      </div>
    </main>
  );
}
