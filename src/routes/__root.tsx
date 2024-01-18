import { Outlet, RootRoute, rootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'


interface TransformedRoute {
  [key: string]: {
    key: string;
    label: string;
    path: string;
    permission: string[];
  };
}

interface MyRouterContext {
  routerDetails: TransformedRoute
}

export const rootRoute = rootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

export const Route = new RootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})