import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./components/Home/Home.jsx";
import Mobile from "./components/Mobile/Mobile.jsx";
import Root from "./components/Root/Root.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import Users from "./components/Users/Users.jsx";
import Users2 from "./components/Users2/Users2.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobile', Component: Mobile},
      {path: 'laptops', Component: Laptops},
      {
        path: 'users', 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<div>Loading...</div>}>
          <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      }
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
