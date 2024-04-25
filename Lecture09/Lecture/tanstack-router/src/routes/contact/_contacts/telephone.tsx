import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact/_contacts/telephone")({
  component: () => <div>Hello /contact/_contacts/telephone!</div>,
});
