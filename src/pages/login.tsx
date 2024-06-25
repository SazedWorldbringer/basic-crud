import { Gem } from "lucide-react"
import UserAuthForm from "../components/user-auth-form"

const LoginPage = () => {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Gem className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome!
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in with Google
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  )
}

export default LoginPage
