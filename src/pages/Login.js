import Nav from "../components/Nav";

const Login = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Nav></Nav>
            <div className="grow-[1] flex justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">Welcome Back!</h2>
                        <div className="card-actions justify-end">
                            <label className="input-group">
                                <span>Email</span>
                                <input type="text" placeholder="info@site.com" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;