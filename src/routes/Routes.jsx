import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddBlogs from "../pages/AddBlogs/AddBlogs";
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../pages/Home/Home/BlogDetails";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import UpdateBlogs from "../pages/UpdateBlogs/UpdateBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../pages/Wishlist/Wishlist";
import ErrorPage from "../pages/Home/shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addblogs",
        element: (
          <PrivateRoute>
            <AddBlogs></AddBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogdetails/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateblog/:id",
        element: (
          <PrivateRoute>
            <UpdateBlogs></UpdateBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "/featuredblogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
