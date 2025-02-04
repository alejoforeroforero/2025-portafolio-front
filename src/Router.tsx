import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App";
import HomePage from "@/pages/HomePage";
import NetArt from "./components/netart/NetArt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Not found</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":section",
        element: <HomePage />,
      },
      {
        path: "/netart",
        element: <NetArt />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;