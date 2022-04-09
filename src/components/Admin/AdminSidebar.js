// import "../../../public/assets/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";
// import "../../../public/assets/css/bootstrap.min.css";
const AdminSidebar = () => {
  return (
    <>
      <div className="menu-list">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="d-xl-none d-lg-none" href="../../dashboard">
            LMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-item ">
                <NavLink className="nav-link active" to="">
                  <i className="fas fa-chart-pie"></i>Dashboard
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink className="nav-link" to="profile">
                  <i class="fas fa-user"></i>Profile
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink className="nav-link" to="courses">
                  <i className="fas fa-book"></i>Courses
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink className="nav-link" to="notification">
                  <i class="fas fa-fw fa-bell"></i>Notification
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink className="nav-link" to="reviews">
                  <i class="fas fa-star"></i>Reviews
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="payment">
                  <i className="fas fa-credit-card"></i>Payments
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="content">
                  <i className="fas fa-pencil-alt"></i>Content
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="faculties">
                  <i class="fas fa-chalkboard-teacher"></i>Faculties
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="settings">
                  <i className="fas fa-cog"></i>Settings
                </NavLink>
              </li>
              <li className="nav-item hi-sh-lg">
                <NavLink className="nav-link" id="logoutDashboard" to="0">
                  <i className="fas fa-power-off"></i>Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
