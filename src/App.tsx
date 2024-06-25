import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Layout from "./layout"
import LoginPage from "./pages/login"
import React from "react"
import HomePage, { homeLoader } from "./pages/home"
import CreatePage from "./pages/create"
import { createAction } from "./components/product-form"

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const user = localStorage.getItem("user")

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Layout /></ProtectedRoute>,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/create",
        element: <CreatePage />,
        action: createAction
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
