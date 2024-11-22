import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login()
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    
    const handleSubmit = () => {
        setUser({username, password})
    }

    return(
        <>
        <h1>Login</h1>
        <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        {" "}
        <input type="text" placeholder="password" value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
        
        </>
    )
}

export default Login;