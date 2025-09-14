import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

const RootLayout = () => (
  <>
    <div>
      <Link to="/">Home</Link> <Link to="/about">About</Link>
    </div>
    <hr />
    <Outlet />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
