import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact/_contacts/")({
  component: Contact,
});

function Contact() {
  return <div>Hello /contact!</div>;
}
