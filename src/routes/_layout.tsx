import { PrincipalLayout } from "@components/layout";
import { FileRoute } from "@tanstack/react-router";


export const Route = new FileRoute('/_layout').createRoute({
    component: PrincipalLayout,
  });