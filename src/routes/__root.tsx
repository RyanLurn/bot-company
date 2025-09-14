import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";
import { Providers } from "@/components/providers";

const RootLayout = () => (
  <Providers>
    <div className="flex gap-2 p-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </div>
    <hr />
    <Outlet />
    <ModeToggle className="fixed right-2 bottom-2" />
  </Providers>
);
export const Route = createRootRoute({ component: RootLayout });
