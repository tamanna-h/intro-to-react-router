import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./components/Home/Home.jsx";
import Mobile from "./components/Mobile/Mobile.jsx";
import Root from "./components/Root/Root.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobile', Component: Mobile},
      {path: 'laptops', Component: Laptops},
    ]
  },
  {
    path: "about",
    element: <div>About React Router</div>,
  },
  {
    path: "blogs",
    element: <div>All my blogs here</div>, 
  },
  {
    path: "app",
    Component: App
  },
  {
    path: "app2",
    // element: <App />,
    Component: App
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
