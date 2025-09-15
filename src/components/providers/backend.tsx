import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { viteEnv } from "@/lib/env";

const convexClient = new ConvexReactClient(viteEnv.VITE_CONVEX_URL);

function BackendProviders({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={viteEnv.VITE_CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convexClient} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}

export { BackendProviders };
