import { GoogleLogin } from "@react-oauth/google"

function App() {
  const responseMsg = (credentialResponse: any) => {
    console.log(credentialResponse)
  }

  const errorMsg = () => {
    console.log("Login failed")
  }

  return (
    <main>
      <h2 className="text-3xl text-stone-800 m-5">
        React Google OAuth
      </h2>

      <GoogleLogin
        onSuccess={responseMsg}
        onError={errorMsg}
      />
    </main>
  )
}

export default App
