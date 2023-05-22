import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import avatar from "images/avatar.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const first_name = localStorage.getItem("user-first-name");
  const last_name = localStorage.getItem("user-last-name");
  const email = localStorage.getItem("user-email");

  const logout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-light mb-4">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#!">
            {title}
          </a>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link d-flex px-0"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {first_name + " " + last_name}
                <img
                  src={avatar}
                  alt={email}
                  className="avatar rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                style={{ margin: 0 }}
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    My Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!" onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet context={{ setTitle }} />
    </main>
  );
}
