import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import App from "../App";
import { ROUTE_PATH } from "./routePath";
import UsePage from "../use";
import NewPromisePage from "../newPromise";
import SetStatePage from "../setState/SetStatePage";
import UpdateState from "../updateState/UpdateState";

function Wrapper() {
  return <Outlet />;
}
const routes = [
  {
    Component: Wrapper,
    children: [
      { path: ROUTE_PATH.MAIN, Component: App },
      { path: ROUTE_PATH.USE, Component: UsePage },
      { path: ROUTE_PATH.SET_STATE, Component: SetStatePage },
      { path: ROUTE_PATH.UPDATE_STATE, Component: UpdateState },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: false,
  },
});

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
