import Nav from "../components/Nav";

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="flex jusitfy-center items-center">
                <img src="./undraw_personal_trainer_re_cnua.svg"></img>
                <div className="flex flex-col gap-10">
                    <span className="normal-case text-5xl p-0 font-mono">Welcome to <span className="font-bold uppercase text-6xl">FlexiFrenzy</span> the best <span className="font-bold uppercase text-6xl">all in one</span> <span className="font-bold uppercase text-6xl">workout</span> and <span className="font-bold uppercase text-6xl">social app</span>.</span>
                    <div>
                        <a className="btn btn-outline btn-info btn-lg btn-wide text-3xl" href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;