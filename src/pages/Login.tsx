import { useState } from "react"
import { loginUser } from "../services/publicApi"

const Login = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
    <div>
        <label>username<br/>
        <input type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        /></label><br/>

        <label>password<br/>
        <input type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        /></label><br/>

        <button onClick={()=>{
            loginUser(username,password)
        }}>Login</button>
    </div>
  )
}

export default Login