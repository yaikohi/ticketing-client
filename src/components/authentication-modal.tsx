import { Button } from "@/components/ui/button";
import { TextField, TextFieldInput } from "@/components/ui/textfield";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createStore } from "solid-js/store";
import { AuthDialogConfigTableType, AuthServicePurposeType } from "@/lib/types";

// ---- CONSTS
const AuthConfigTable: Omit<AuthDialogConfigTableType, "all" | "current-user"> =
  {
    "sign-in": {
      title: `Login`,
      description: `Login to your account.`,
    },
    "sign-up": {
      title: `Register`,
      description: `Sign up for Ticketing.`,
    },
  };

/**
 * Sends either a 'sign-in' or a 'sign-up' HTTP POST request depending on the purpose provided.
 * Requires email + password to authenticate.
 */
async function authenticate({
  purpose,
  email,
  password,
}: {
  purpose: AuthServicePurposeType;
  email: string;
  password: string;
}): Promise<any> {
  const response = await fetch(`/api/authenticate`, {
    method: "POST",
    body: JSON.stringify({
      purpose,
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log({ response });
  const result = await response.json();

  // if (!result.ok) {
  //   console.log({ result });
  // }

  return result;
}

// async function getCurrentUser(): Promise<any> {
//   return await (await fetch(`/api/current-user`)).json();
// }

// ---- COMPONENT
export function AuthenticationModal({
  purpose,
}: {
  purpose: AuthServicePurposeType;
}) {
  const [auth, setAuth] = createStore({
    email: "",
    password: "",
  });

  const [result, setResult] = createStore({
    success: false,
    message: "",
  });

  // const [currentUser] = createResource(getCurrentUser);

  const onSubmit = async (event: Event) => {
    event.preventDefault();
    const { email, password } = auth;

    const res = await authenticate({ purpose, email, password });
    console.log({ res });
    setResult(res);
  };
  // createEffect(() => console.log(currentUser()));
  return (
    <div class="w-max">
      <Dialog>
        <DialogTrigger>{AuthConfigTable[purpose].title}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{AuthConfigTable[purpose].title}</DialogTitle>
            <DialogDescription>
              {AuthConfigTable[purpose].description}
            </DialogDescription>
          </DialogHeader>
          <div class="h-max">
            <form
              onSubmit={onSubmit}
              method="post"
              class="flex flex-col gap-2 max-w-md"
            >
              <TextField>
                <TextFieldInput
                  onInput={(e: any) =>
                    setAuth({
                      ...auth,
                      email: e?.currentTarget
                        ?.value as HTMLInputElement["value"],
                    })
                  }
                  type="email"
                  placeholder="Email"
                />
              </TextField>

              <TextField>
                <TextFieldInput
                  onInput={(e: any) =>
                    setAuth({
                      ...auth,
                      password: e?.currentTarget
                        ?.value as HTMLInputElement["value"],
                    })
                  }
                  type="password"
                  placeholder="Password123"
                />
              </TextField>

              <Button
                class="mt-20"
                type="submit"
                size={"lg"}
                variant={"default"}
              >
                Submit
              </Button>
            </form>
          </div>
          {result.success && (
            <>
              <div class="text-green-400">
                <p>{result.message}</p>
              </div>
            </>
          )}
          {!result.success && (
            <>
              <div class="text-red-400">
                <p>{result.message}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
