import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Layout from "./layout"
import LoginPage from "./pages/login"
import React from "react"
import HomePage from "./pages/home"
import { Product } from "./types"

let products: Product[] = [
  {
    id: 1,
    name: 'laptop',
    price: 1000
  },
  {
    id: 2,
    name: 'phone',
    price: 500,
  },
  {
    id: 3,
    name: 'tablet',
    price: 300
  }
]

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
        element: <HomePage products={products} />
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
