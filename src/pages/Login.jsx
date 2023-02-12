import { useState } from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("")

    const login = async () => {
        const promise = account.createEmailSession(user.email, user.password);
        
        promise.then(function (resp) {
            navigate('/feed')
        }, function (err) {
            if (err.message.split(" ")[1].toLowerCase() === '"password"') {
                setError("Invalid Password - 8 digits required")
            }
            if (err.message.split(" ")[1].toLowerCase() === '"email"') {
                setError("Invalid Email")
            }
            if (err.message.split(" ")[1].toLowerCase() === "limit") {
                setError("Rate Limit - Please wait")
            }
        });
    }

    return (
        <div className="flex flex-col w-screen h-screen">
            <Nav></Nav>
            <div className="grow-[1] flex justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body flex flex-col items-center gap-3">
                        <div className="flex flex-col jusitfy-center items-center">
                            <img src="https://img.icons8.com/ios/50/null/muscle-flexing.png" />
                            <h2 className="card-title font-mono">FlexiFrenzy</h2>
                        </div>
                        <p className="font-mono text-red-600">{error}</p>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" onChange={(e) => {
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }} />
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" onChange={(e) => {
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }} />
                        <button className="btn btn-accent" onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;