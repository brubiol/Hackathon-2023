import Nav from "../components/Nav";

const Login = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Nav></Nav>
            <div className="grow-[1] flex justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body flex flex-col items-center gap-2">
                        <h2 className="card-title">Welcome Back!</h2>
                        <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="password" className="input input-bordered w-full max-w-xs" />
                        <button className="btn btn-accent">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;