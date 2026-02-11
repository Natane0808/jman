import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

export const routes: RouteDefinition[] = [
  {
    path: ["/", "dashboard"],
    component: lazy(() => import("../pages/Home")),
  },
  {
    path: "/store",
    component: lazy(() => import("../pages/Store")),
  },
];

export default routes;
