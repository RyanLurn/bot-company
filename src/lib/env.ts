import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

const viteEnv = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_CONVEX_URL: z.url(),
    VITE_CLERK_PUBLISHABLE_KEY: z.string().min(1)
  },
  runtimeEnv: import.meta.env
});

export { viteEnv };
