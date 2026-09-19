import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function PostBody() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`card p-4 ${
                theme === "dark"
                    ? "bg-dark text-white"
                    : "bg-light text-dark"
            }`}
        >
            <h4>My Instagram Post</h4>

            <p>
                This post automatically changes its background
                when the theme changes.
            </p>

            <button className="btn btn-success">
                Like ❤️
            </button>
        </div>
    );
}

export default PostBody;