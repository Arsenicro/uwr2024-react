/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsIndexImport } from './routes/posts/index'
import { Route as PostsPostIdImport } from './routes/posts/$postId'
import { Route as HelloIdImport } from './routes/hello.$id'
import { Route as ContactContactsImport } from './routes/contact/_contacts'
import { Route as ContactContactsIndexImport } from './routes/contact/_contacts/index'
import { Route as ContactContactsTelephoneImport } from './routes/contact/_contacts/telephone'

// Create Virtual Routes

const ContactImport = createFileRoute('/contact')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const PostsIndexRoute = PostsIndexImport.update({
  path: '/posts/',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/posts/$postId',
  getParentRoute: () => rootRoute,
} as any)

const HelloIdRoute = HelloIdImport.update({
  path: '/hello/$id',
  getParentRoute: () => rootRoute,
} as any)

const ContactContactsRoute = ContactContactsImport.update({
  id: '/_contacts',
  getParentRoute: () => ContactRoute,
} as any)

const ContactContactsIndexRoute = ContactContactsIndexImport.update({
  path: '/',
  getParentRoute: () => ContactContactsRoute,
} as any)

const ContactContactsTelephoneRoute = ContactContactsTelephoneImport.update({
  path: '/telephone',
  getParentRoute: () => ContactContactsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/contact/_contacts': {
      preLoaderRoute: typeof ContactContactsImport
      parentRoute: typeof ContactRoute
    }
    '/hello/$id': {
      preLoaderRoute: typeof HelloIdImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof rootRoute
    }
    '/contact/_contacts/telephone': {
      preLoaderRoute: typeof ContactContactsTelephoneImport
      parentRoute: typeof ContactContactsImport
    }
    '/contact/_contacts/': {
      preLoaderRoute: typeof ContactContactsIndexImport
      parentRoute: typeof ContactContactsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutLazyRoute,
  ContactRoute.addChildren([
    ContactContactsRoute.addChildren([
      ContactContactsTelephoneRoute,
      ContactContactsIndexRoute,
    ]),
  ]),
  HelloIdRoute,
  PostsPostIdRoute,
  PostsIndexRoute,
])

/* prettier-ignore-end */
