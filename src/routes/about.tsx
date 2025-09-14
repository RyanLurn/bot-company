import { createFileRoute } from "@tanstack/react-router";

const Route = createFileRoute("/about")({
  component: About
});

function About() {
  return <div>Hello from About!</div>;
}

export { Route };
