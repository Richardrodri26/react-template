import { Outlet, RootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = new RootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <p>Esto es un template, se debe crear las rutas por las cuales se usara este proyecto y sus componentes</p>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})