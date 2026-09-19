import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function ToggleThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className="btn btn-primary mt-3"
            onClick={toggleTheme}
        >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
}

export default ToggleThemeButton;