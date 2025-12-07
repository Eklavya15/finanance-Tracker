import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) =>
    location.pathname === path ? "nav-link nav-link-active" : "nav-link";

  return (
    <header className="app-navbar">
      <div className="nav-left">
        <span style={{ fontWeight: 700 }}>Finance Tracker</span>
        {user && (
          <>
            <Link className={isActive("/")} to="/">
              Dashboard
            </Link>
            <Link className={isActive("/transactions")} to="/transactions">
              Transactions
            </Link>
          </>
        )}
      </div>

      <div className="nav-right">
        <button className="btn btn-ghost" onClick={toggleTheme}>
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
        {user ? (
          <>
            <span style={{ fontSize: "0.85rem" }}>
              {user.email} · {user.role}
            </span>
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
