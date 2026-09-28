import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {

    const redirect = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("userEmail")) {
            redirect("/login")
        }
    })

    const handleLogout = () => {
        localStorage.removeItem("userName")
        localStorage.removeItem("userEmail")
        toast.success("logout Successfully")
        redirect("/login")
    }

    return (
        <nav className="navbar bg-white border-bottom shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-semibold" href="/products">ProductHub</a>

                <div className="d-flex align-items-center gap-2">
                    <label className="text-decoration-none me   -3">Hello {localStorage.getItem("userName")}</label>
                    <button onClick={handleLogout} type="button" className="btn btn-outline-danger btn-sm">Log out</button>
                </div>
            </div>
        </nav>
    );
}

export default Header