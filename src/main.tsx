import { scan } from "react-scan";
// must be imported before React and React DOM
import { StrictMode } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { routeTree } from "@/routeTree.gen";

scan({
  enabled: true
});

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
