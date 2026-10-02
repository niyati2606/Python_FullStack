import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/MyState";

function SignUpComponent() {

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      redirect("/")
    }
  }, [])

  const context = useContext(AuthContext)

  const { user, setUser, registerUser } = context

  const setUserValues = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    console.log(user)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  }

  const [showPw, setShowPw] = useState(false);

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center py-4">
      <div className="card shadow-sm w-100" style={{ maxWidth: 420 }}>
        <div className="card-body p-4">
          <h4 className="mb-1">Create your account</h4>
          <p className="text-muted mb-4">Sign up to start adding products.</p>

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full name</label>
              <input id="name" onChange={setUserValues} value={user.name} name="name" type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                value={user.email}
                onChange={setUserValues}
                name="email"
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
                  value={user.password}
                  onChange={setUserValues}
                  name="password"
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
              <div className="form-text">At least 6 characters.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="confirm" className="form-label">Confirm password</label>
              <input
                id="confirm"
                name="confirm"
                type={showPw ? "text" : "password"}
                className="form-control"
              />
            </div>

            <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100">Create account</button>
          </form>

          <p className="text-center text-muted small mt-3 mb-0">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent