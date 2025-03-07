import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import Properties from "./pages/Properties/Properties.tsx"
import Bookings from "./pages/Bookings/Bookings.tsx"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx"
import AddProperty from "./pages/AddProperty/AddProperty.tsx"
import Auth from "./pages/Auth/Auth.tsx"
import Dashboard from "./pages/Dashboard/Dashboard.tsx"
import EditProperty from "./pages/EditProperty/EditProperty.tsx"
import { ToastContainer } from 'react-toastify';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Layout />
        // </ProtectedRoute>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/my-properties",
          element: <Properties />
        },
        {
          path: "/bookings/:id",
          element: <Bookings />
        },
        {
          path: "/property/:id",
          element: <EditProperty />,
        },
      ]
    },
    {
      path: "/add-property",
      element: (
        <AddProperty />
      )
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
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App