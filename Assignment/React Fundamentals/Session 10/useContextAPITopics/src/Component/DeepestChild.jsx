import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function DeepChild() {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <h3>Current Theme: {theme}</h3>
        </div>
    );
}

export default DeepChild;