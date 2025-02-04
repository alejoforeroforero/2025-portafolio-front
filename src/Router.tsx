import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App";
import HomePage from "@/pages/HomePage";

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
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;