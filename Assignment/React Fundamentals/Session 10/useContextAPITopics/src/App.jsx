import React, { useContext } from "react"
import NavbarComponent from "./Component/NavBarComponent"
import ThemeContext from "./Component/ThemeContext";
import UserContext from "./Component/UserContext";
import DeepChild from "./Component/DeepestChild";

function App() {

  const user = useContext(UserContext);
  const { theme, toggleTheme } = useContextt(ThemeContext);

  const isDark = theme === "dark";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: isDark ? "#222" : "#fff",
        color: isDark ? "#fff" : "#000",
        paddingBottom: "30px"
      }}
    >
      <NavbarComponent />

      <div className="container mt-4">
        <h2>Context API Demo</h2>

        <p>
          User: {user.username}
        </p>

        <button
          className="btn btn-primary"
          onClick={toggleTheme}
        >
          Switch to {isDark ? "Light" : "Dark"} Theme
        </button>

        <hr />

        <DeepChild />
      </div>
    </div>
  )
}

export default App
