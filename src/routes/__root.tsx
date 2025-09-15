import { SignIn, UserButton } from "@clerk/clerk-react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";
import { Providers } from "@/components/providers";
import { ModeToggle } from "@/components/utils/mode-toggle";
import { ScreenLoader } from "@/components/utils/screen-loader";

const RootLayout = () => (
  <Providers>
    <Unauthenticated>
      <div className="flex h-screen w-screen items-center justify-center">
        <SignIn />
      </div>
    </Unauthenticated>
    <Authenticated>
      <div className="fixed top-2 right-2">
        <UserButton />
      </div>
      <Outlet />
    </Authenticated>
    <AuthLoading>
      <ScreenLoader />
    </AuthLoading>
    <ModeToggle className="fixed right-2 bottom-2" />
  </Providers>
);
export const Route = createRootRoute({ component: RootLayout });
