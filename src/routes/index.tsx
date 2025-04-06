import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../layouts";
import Home from "../pages/Home";
import { RoutePaths } from "./RoutesPath";

export const router = createBrowserRouter([
  {
    path: RoutePaths.ROOT,
    element: <GuestLayout />,
    children: [
      {
        path: RoutePaths.ROOT,
        element: <Home />,
      },
    ],
  },
]);
