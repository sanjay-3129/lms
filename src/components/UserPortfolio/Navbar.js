import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <a class="navbar-brand" href="#">
            {/* <img
              src="images/logo.png"
              className="img-fluid"
              style={{ width: '440px' }}
            /> */}
            LOGO
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse main-menu" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <a class="" href="#">
                  <Link to="/about">About Us</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="" href="#">
                  <Link to="/courses">Courses</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="" href="#">
                  <Link to="/contactus">Contact Us</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="" href="#">
                  <Link to="signin">Sign in / Sign up</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
