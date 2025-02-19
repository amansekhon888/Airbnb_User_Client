import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import Properties from "./pages/Properties/Properties.tsx"
import Bookings from "./pages/Bookings/Bookings.tsx"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx"
import AddProperty from "./pages/AddProperty/AddProperty.tsx"
import Auth from "./pages/Auth/Auth.tsx"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
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
          element: (
            <AddProperty />
          )
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