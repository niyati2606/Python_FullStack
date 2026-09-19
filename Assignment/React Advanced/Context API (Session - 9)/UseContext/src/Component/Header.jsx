// import React, { useContext } from "react";
// import { ThemeContext } from "../Context/ThemeContext";

// function Header() {
//     const { state, dispatch } = useContext(ThemeContext);

//     return (
//         <header
//             className={`p-4 ${
//                 state.theme === "light"
//                     ? "bg-light text-dark"
//                     : "bg-dark text-white"
//             }`}
//         >
//             <div className="container">
//                 <h2>My Theme App</h2>

//                 <p>
//                     Current Theme: <strong>{state.theme}</strong>
//                 </p>

//                 <button
//                     className="btn btn-primary"
//                     onClick={() =>
//                         dispatch({ type: "TOGGLE_THEME" })
//                     }
//                 >
//                     Toggle Theme
//                 </button>
//             </div>
//         </header>
//     );
// }

// export default Header;

import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Header() {
    const { state } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">
                    Instagram
                </span>

                {state.isLoggedIn && (
                    <span className="text-white">
                        Hello, {state.user.name}
                    </span>
                )}
            </div>
        </nav>
    );
}

export default Header;