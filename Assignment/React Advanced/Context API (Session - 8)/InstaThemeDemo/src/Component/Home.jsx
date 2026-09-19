import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Home() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            className={`container mt-5 p-5 ${
                theme === "dark"
                    ? "bg-dark text-white"
                    : "bg-light text-dark"
            }`}
        >
            <h1>InstaThemeDemo</h1>

            <p>Current Theme: {theme}</p>

            <button
                className="btn btn-primary"
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        </div>
    );
}

export default Home;