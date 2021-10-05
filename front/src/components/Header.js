import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";

function Header() {
  const { isLogined } = useContext(GlobalUserContext);

  const handleLogout=(e)=> {
    e.preventDefault();
    localStorage.clear();  
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <Link className="navbar-brand color-white" to="/">
          RedToolsImg
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notes">
                Note
              </Link>
            </li>
            {isLogined && (
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Create Note
                </Link>
              </li>
            )}
          </ul>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Login
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {isLogined ? (
                <li>
                  <a className="dropdown-item" href="/auth/signup" onClick={(e)=> handleLogout(e)}>
                    Logout
                  </a>
                </li>
              ) : (
                <>
                  <li>
                    <Link className="dropdown-item" to="/auth/signin">
                      Singin
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/auth/signup">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
