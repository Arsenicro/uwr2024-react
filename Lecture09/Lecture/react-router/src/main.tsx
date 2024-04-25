import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import RootLayout from "./layout/RootLayout";
import About from "./routes/About/About";
import Home from "./routes/Home/Home";
import Product from "./routes/Product/Product";
import Contact from "./routes/contact/Contact";
import Telephone from "./routes/contact/Telephone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/contact",
        children: [
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/contact/telephone",
            element: <Telephone />,
          },
        ],
      },
    ],
  },
]);

const jsxRouter = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact">
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/telephone" element={<Telephone />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* {jsxRouter} */}
  </React.StrictMode>
);
