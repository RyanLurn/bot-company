import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
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
  </Providers>
);
export const Route = createRootRoute({ component: RootLayout });
