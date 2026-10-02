import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/MyState";

function LoginComponent() {

    useEffect(() => {
        if (localStorage.getItem("userName")) {
            redirect("/")
        }
    }, [])

    const context = useContext(AuthContext)

    const { user, setUser, login, getUserDetails } = context

    const setUserValues = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        //  console.log(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("login---", user)
        getUserDetails(user.email)
        login(user);

    }

    const [showPw, setShowPw] = useState(false);

    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center py-4">
            <div className="card shadow-sm w-100" style={{ maxWidth: 420 }}>
                <div className="card-body p-4">
                    <h4 className="mb-1">Welcome back</h4>
                    <p className="text-muted mb-4">Log in to manage your products.</p>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={setUserValues}
                                type="email"
                                className="form-control"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="input-group">
                                <input
                                    id="password"
                                    name="password"
                                    value={user.password}
                                    onChange={setUserValues}
                                    type={showPw ? "text" : "password"}
                                    className="form-control"
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => setShowPw(!showPw)}
                                >
                                    {showPw ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="remember" />
                                <label className="form-check-label" htmlFor="remember">Remember me</label>
                            </div>
                            <a href="/forgot-password" className="small">Forgot password?</a>
                        </div> */}

                        <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100">Log in</button>
                    </form>

                    <p className="text-center text-muted small mt-3 mb-0">
                        New here? <a href="/signup">Create an account</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent