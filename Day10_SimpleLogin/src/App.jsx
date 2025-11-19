import { useState } from "react"
function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = () => {
    if(email.trim() === "" || password.trim() === "") {
      setMessage("Please fill the form !")
      return;
    }

  }

  return (
    <div className="h-screen flex flex-col items-center justify-around bg-[#223242]">
      <h1 className="text-[62px] font-bold text-white">Day 10 Simple Login</h1>

      {/* Login box */}
      <div className="flex flex-col gap-5 items-center justify-center w-[500px] h-[400px] shadow-[0_0_7px_1px_rgba(255,255,255,0.5)] rounded-3xl bg-[#223242] inset-0">
        <h2 className="text-[35px] text-white font-semibold ">Sign in</h2>
        <input 
          type="email" 
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-[400px] h-13 rounded-full shadow-[0_0_5px_1px_rgba(255,255,255,0.5)] pl-10 placeholder:text-[#abaaaa]"
        />

        <input 
          type="password" 
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-[400px] h-13 rounded-full shadow-[0_0_5px_1px_rgba(255,255,255,0.5)] pl-10 placeholder:text-[#abaaaa]"
          />

          <button
            onClick={handleLogin}
            className="bg-[#02DEC4] w-[400px] h-12 rounded-full text-[24px] text-white font-semibold hover:shadow-[0_0_5px_1px_rgba(255,255,255,0.5)]"
          >
            Login
          </button>

          {/* Result message */}
          <p className="text-center text-white">
            {message}
          </p>
      </div>

    </div>
  )
}

export default App