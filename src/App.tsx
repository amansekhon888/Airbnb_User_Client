import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./pages/Home/Home.tsx"
import Properties from "./pages/Properties/Properties.tsx"
import AddProperty from "./Pages/AddProperty/AddProperty.tsx";

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
          path: "/add-property",
          element: <AddProperty />,
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App