import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./pages/Home/Home.tsx"
import Properties from "./pages/Properties/Properties.tsx"
import Bookings from "./pages/Bookings/Bookings.tsx"
import AddProperty from "./Pages/AddProperty/AddProperty.tsx";
import Auth from "./Pages/Auth/Auth.tsx";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/my-properties",
          element: <Properties />
        },
        {
          path: "/bookings/:id",
          element: <Bookings />
        },
        {
          path: "/add-property",
          element: <AddProperty />,
        },
      ]
    },
    {
      path: "/auth",
      element: <Auth />
    },
    {
      path: "/auth/forgot-password",
      element: <Auth />
    },
    {
      path: "/auth/verify",
      element: <Auth />
    },
    {
      path: "/auth/reset-password",
      element: <Auth />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App