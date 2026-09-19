import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ToggleThemeButton from "../Component/ToggleThemeButton";

function Navbar() {
    const { theme } = useContext(ThemeContext);

    return (
        <body className={`navbar p-3 ${theme === "dark"
                ? "bg-dark text-white"
                : "bg-light text-dark"
            }`}>
            <nav>
                <div className="container">
                    <h3>Instagram</h3>

                    <ToggleThemeButton />
                </div>
            </nav>
        </body>
    );
}

export default Navbar;