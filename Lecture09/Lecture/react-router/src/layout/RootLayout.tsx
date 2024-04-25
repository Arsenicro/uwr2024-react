import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul className="flex justify-center gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? "underline" : ""}`}
              state={{ from: location.pathname }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `${isActive ? "underline" : ""}`}
              state={{ from: location.pathname }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${isActive ? "underline" : ""}`}
              state={{ from: location.pathname }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact/telephone"
              className={({ isActive }) => `${isActive ? "underline" : ""}`}
              state={{ from: location.pathname }}
            >
              Contact Telephone
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={() => navigate(location.state.from ?? "/")}>Back</button>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
