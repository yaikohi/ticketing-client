import { useLocation } from "@solidjs/router";

export default function Nav() {
  return (
    <nav class="bg-violet-800">
      <ul class="container flex items-center p-3 text-gray-200">
        <NavLink text={"Home"} path={"/"} />
        <NavLink text={"Register"} path={"/auth/sign-up"} />
        <NavLink text={"Login"} path={"/auth/sign-in"} />
      </ul>
    </nav>
  );
}

function NavLink({ text, path }: { text: string; path: string }) {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-rose-600"
      : "border-transparent hover:border-rose-600";
  return (
    <>
      <li class={`border-b-2 ${active(path)} mx-1.5 sm:mx-6`}>
        <a href={path}>{text}</a>
      </li>
    </>
  );
}
