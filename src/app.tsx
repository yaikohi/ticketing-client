// @refresh reload
import { Router } from "@solidjs/router";
import { clientOnly, FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";

const ClientSideNav = clientOnly(() => import("@/components/nav"));

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <ClientSideNav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
