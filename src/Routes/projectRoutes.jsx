
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LandingPage from "../pages/LandinPage";
import Bags from "../pages/Bags";
import Sneaker from "../pages/Sneaker"
import Belt from '../pages/Belt'
import Contact from "../pages/Contact"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children:[
      {
        path:"/BAGS",
        element:<Bags/>
      },
      {
        path:"/SNEAKERS",
        element:<Sneaker/>
      },
      {
        path:"/BELT",
        element:<Belt/>
      },
      {
        path:"/CONTACT",
        element:<Contact/>
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
