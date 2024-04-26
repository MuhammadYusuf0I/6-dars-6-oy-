import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MianLayout from "./layouts/MianLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Product from "./pages/Product";

import "./App.css";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MianLayout></MianLayout>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/product/:id",
          element: <Product></Product>,
        },
        {
          path: "*",
          element: <Error></Error>,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
