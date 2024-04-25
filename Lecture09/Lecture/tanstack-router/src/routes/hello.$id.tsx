import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hello/$id')({
  component: () => <div>Hello /hello/$id!</div>
})