import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <span>💰</span>
          <span>Expense Tracker</span>
        </Link>

        <div className="d-flex align-items-center gap-3">
          {isLoggedIn ? (
            <>
              <ul className="navbar-nav d-flex flex-row gap-2">
                <li className="nav-item">
                  <NavLink
                    to="/expenses"
                    className={({ isActive }) =>
                      `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                    }
                  >
                    Expenses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/summary"
                    className={({ isActive }) =>
                      `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                    }
                  >
                    Summary
                  </NavLink>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-outline-light btn-sm ms-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <ul className="navbar-nav d-flex flex-row gap-2">
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
