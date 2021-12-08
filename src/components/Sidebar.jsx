import { Link } from "react-router-dom";

const Sidebar = () => (
  <header className="col-md-2">
    <nav className="sidebar-sticky  navbar-expand-md">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto flex-column">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pastlaunches" className="nav-link">
              Past Launches
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/landpads" className="nav-link">
              Land pads
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Sidebar;
