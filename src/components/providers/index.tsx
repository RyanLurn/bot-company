import { BackendProviders } from "@/components/providers/backend";
import { ThemeProvider } from "@/components/providers/theme";
import { Toaster } from "@/components/ui/sonner";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BackendProviders>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
        <Toaster closeButton richColors position="top-center" />
      </ThemeProvider>
    </BackendProviders>
  );
}

export { Providers };
