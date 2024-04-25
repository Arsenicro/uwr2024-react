import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact/_contacts")({
  component: () => (
    <div>
      ContactsLayout <Outlet />
    </div>
  ),
});
