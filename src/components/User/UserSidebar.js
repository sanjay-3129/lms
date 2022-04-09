import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <>
      <div class="sidebar col-md-3 col-lg-2 col-xl-2 p-0">
        <button type="button" class="btn">
          <i class="fas fa-bars"></i>
        </button>
        <div class="content">
          <h3>Dashboard</h3>
          <ul class="prfl_list p-0">
            <li class="active">
              <Link class="list-link" to="profile">
                <i class="far fa-user"></i>My Profile
              </Link>
            </li>
            <li>
              <Link class="list-link" to="courses">
                <i class="fas fa-tv"></i>My Courses
              </Link>
            </li>
            <li>
              <Link class="list-link" to="bookmarks">
                <i class="far fa-heart"></i>My Bookmarks
              </Link>
            </li>
            {/* <li>
              <Link class="list-link" to="cart">
                <i class="fas fa-shopping-cart"></i>My Cart
              </Link>
            </li> */}
            <li>
              <Link class="list-link" to="orders">
                <i class="fas fa-receipt"></i>My Orders
              </Link>
            </li>
          </ul>
          <h3>Account</h3>
          <ul class="prfl_list p-0">
            <li class="list-item">
              <Link class="list-link" to="settings">
                <i class="fas fa-user-cog"></i>Settings
              </Link>
            </li>
            <li class="list-item">
              <a class="list-link" href="login.html">
                <i class="fas fa-sign-out-alt"></i>Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
