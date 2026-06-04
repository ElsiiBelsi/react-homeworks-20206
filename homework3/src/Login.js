import { useState } from "react";

function Login ({setIsLoggedIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const correctEmail = "digitalAcademy@gmail.com";
    const correctPassword = "iLoveReact123";

    const isValid = email === correctEmail && password === correctPassword;

    return (
        <div className="login">
            <input 
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />

            <input
               placeholder="Password"
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />          

            <button
            disabled={!isValid}
            onClick={() => setIsLoggedIn(true)} >
                Login
            </button>
        </div>
    );
}

export default Login;       
    

//ცვლილება
