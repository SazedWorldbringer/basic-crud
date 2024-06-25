import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Layout from "./layout"
import LoginPage from "./pages/login"
import React from "react"

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
    element: <ProtectedRoute><Layout /></ProtectedRoute>
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
