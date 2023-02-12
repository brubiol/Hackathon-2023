const Nav = () => {
<<<<<<< Updated upstream
=======
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        const getData = account.get()
        getData.then((resp) => { setUserDetails(resp) }, (err) => { console.log(err) })
    }, [])

    const logout = async (e) => {
        e.preventDefault()

        try {
            await account.deleteSession('current')
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }


>>>>>>> Stashed changes
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
<<<<<<< Updated upstream
                        <li><a>Home</a></li>
                        <li><a>Sign Up</a></li>
                        <li><a>Login</a></li>
=======
                        <li><a href="/">Home</a></li>
                        {userDetails != null ? <> <li><a href="/Leaderboard">Leaderboard</a></li> <li><button onClick={logout}>Logout</button></li>
                        </> : <><li><button>Sign Up</button></li>
                            <li><a href="/login">Login</a></li></>}
>>>>>>> Stashed changes
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">FlexiFrenzy</a>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
}

export default Nav;