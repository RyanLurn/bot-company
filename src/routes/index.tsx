import { createFileRoute } from "@tanstack/react-router";

const Route = createFileRoute("/")({
  component: Index
});

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}

export { Route };
