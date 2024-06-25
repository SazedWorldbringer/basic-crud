import { Outlet } from "react-router-dom"
import Nav from "./components/nav/nav"

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40">
        <Nav />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
