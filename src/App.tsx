import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Layout from "./layout"
import LoginPage from "./pages/login"
import React from "react"
import HomePage, { homeLoader } from "./pages/home"
import { Product } from "./types"
import CreatePage from "./pages/create"

let placeholderProducts: Product[] = [
  {
    id: 1,
    name: 'laptop',
    price: 1000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: 'phone',
    price: 500,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: 'headphones',
    price: 300,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/create",
        element: <CreatePage />
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
