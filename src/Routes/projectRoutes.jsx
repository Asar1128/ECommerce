
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LandingPage from "../pages/LandinPage";
import Bags from "../pages/Bags";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children:[
      {
        path:"/bags",
        element:<Bags/>
      },
    ]
  }
]);

const RouterWraper = () => {
  return (
    <RouterProvider router={Router}>
      <div>Loading...</div>
    </RouterProvider>
  );
};
export default RouterWraper;
