import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const Route = createFileRoute("/")({
  component: Index
});

function Index() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
}

export { Route };
