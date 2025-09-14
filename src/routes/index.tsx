import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Route = createFileRoute("/")({
  component: Index
});

function Index() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => toast.info("Hello")}>Click me</Button>
    </div>
  );
}

export { Route };
