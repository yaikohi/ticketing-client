import { Button } from "@/components/ui/button";
import { TextField, TextFieldInput } from "@/components/ui/textfield";
import { createSignal } from "solid-js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:5000/api/users/sign-in`
    : `https://ticketing.dev/api/users/sign-in`;
// @TODO
// type PathType =
type PurposeType = "sign-in" | "sign-up";
type AuthConfigPathType = `/api/users/${PurposeType}`;
type AuthDialogConfigTable = {
  [Property in PurposeType]: {
    path: AuthConfigPathType;
    title: string;
    description: string;
  };
};
export function AuthDialog({ purpose }: { purpose: PurposeType }) {
  const [password, setPassword] = createSignal("");
  const [email, setEmail] = createSignal("");

  const AuthConfigTable: AuthDialogConfigTable = {
    "sign-in": {
      path: `/api/users/sign-in`,
      title: `Login`,
      description: `Login to your account.`,
    },
    "sign-up": {
      path: `/api/users/sign-up`,
      title: `Register`,
      description: `Sign up for Ticketing.`,
    },
  };
  const URL = `${BASE_URL}` + AuthConfigTable[purpose].path;

  const onSubmit = async (event: Event) => {
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

    return result;
  };
  return (
    <Dialog>
      <DialogTrigger>{purpose}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{purpose}</DialogTitle>
          <DialogDescription>Sign in to your account.</DialogDescription>
        </DialogHeader>
        <div>
          <form
            onSubmit={onSubmit}
            method="post"
            class="flex flex-col gap-2 max-w-md"
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
