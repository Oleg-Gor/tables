import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <header className="col-md-2">
    <nav className="sidebar-sticky  navbar-expand-md ">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto d-flex flex-column btn-group-vertical row" role="group" >

          <li className="nav-item col-12">
            <NavLink className="btn btn-outline-primary" role="button" to="/" >
              <i className="bi bi-house" style={{ fontSize: "1rem", color: "primary" }} > Next Launches</i>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/pastlaunches" className="btn btn-outline-primary" role="button">
              <i className="bi bi-calendar2-week-fill" style={{ fontSize: "1rem", color: "primary" }}> Past Launches</i>
            </NavLink>
          </li>
          <li className="nav-item col-12">
            <NavLink to="/landpads" className="btn btn-outline-primary" role="button">
              <i className="bi bi-align-bottom" style={{ fontSize: "1rem", color: "primary" }}> Land pads</i>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Sidebar;
