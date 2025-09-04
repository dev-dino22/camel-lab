import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import App from "../App";
import { ROUTE_PATH } from "./routePath";
import UsePage from "../use";
import NewPromisePage from "../newPromise";

function Wrapper() {
  return <Outlet />;
}

const routes = createBrowserRouter([
  {
    Component: Wrapper,
    children: [
      { path: ROUTE_PATH.MAIN, Component: App },
      { path: ROUTE_PATH.USE, Component: UsePage },
      { path: ROUTE_PATH.NEW_PROMISE, Component: NewPromisePage },
    ],
  },
]);

function Router() {
  return <RouterProvider router={routes} />;
}

export default Router;
