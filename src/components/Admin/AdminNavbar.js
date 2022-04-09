// import "../../../public/assets/css/bootstrap.min.css";
import {
  storage,
  ref,
  db,
  doc,
  uploadBytes,
  updateDoc,
  getDownloadURL,
  getDoc,
} from "../../services/firebase";
import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
const AdminNavbar = () => {
  const logo = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  const [details, setDetails] = useState({});
  const [logo1, setLogo1] = useState(null);
  const [about1, setAbout1] = useState(null);
  const [contact1, setContact1] = useState(null);
  const [carouselImage1, setcarouselImage1] = useState(null);
  const [carouselImage2, setcarouselImage2] = useState(null);
  const [carouselImage3, setcarouselImage3] = useState(null);

  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [email, setEmail] = useState("");
  const [aboutus, setAboutus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // console.log('Content>>>', details);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const domain = "asdf.domain.com";
    var firestoreRef = await doc(db, "secondary", domain);
    var document = await getDoc(firestoreRef);
    // console.log('firebase', document?.data()?.content);
    setDetails(document?.data()?.content);
  };

  return (
    <>
      <nav class="navbar topbar-rr navbar-expand-lg bg-white fixed-top">
        {/* <!-- <a class="navbar-brand" href="index.html" style="font-size: 23px;"></a> --> */}
        <img
          id="logo"
          src={details?.logo}
          alt=""
          height="80"
          width="100px"
        />

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto navbar-right-top">
            <li class="nav-item dropdown notification">
              <a
                class="nav-link nav-icons"
                href="0#"
                id="navbarDropdownMenuLink1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-fw fa-bell"></i> <span>5</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-right notification-dropdown">
                <li>
                  <div class="notification-title"> Notification</div>
                  <div class="notification-list">
                    <div class="list-group">
                      <a
                        href="0#"
                        class="list-group-item list-group-item-action active"
                      >
                        <div class="notification-info">
                          <div class="notification-list-user-img">
                            <img
                              src="../../assets/images/avatar-2.jpg"
                              alt=""
                              class="user-avatar-md rounded-circle"
                            />
                          </div>
                          <div class="notification-list-user-block">
                            <span class="notification-list-user-name">
                              Name
                            </span>
                            Payment successful
                            <div class="notification-date">2 min ago</div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="0#"
                        class="list-group-item list-group-item-action"
                      >
                        <div class="notification-info">
                          <div class="notification-list-user-img">
                            <img
                              src="../../assets/images/avatar-3.jpg"
                              alt=""
                              class="user-avatar-md rounded-circle"
                            />
                          </div>
                          <div class="notification-list-user-block">
                            <span class="notification-list-user-name">
                              Name
                            </span>
                            Payment is successful
                            <div class="notification-date">2 days ago</div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="0#"
                        class="list-group-item list-group-item-action"
                      >
                        <div class="notification-info">
                          <div class="notification-list-user-img">
                            <img
                              src="../../assets/images/avatar-4.jpg"
                              alt=""
                              class="user-avatar-md rounded-circle"
                            />
                          </div>
                          <div class="notification-list-user-block">
                            <span class="notification-list-user-name">
                              Name
                            </span>{' '}
                            is successfully paid amount.
                            <div class="notification-date">2 min ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-footer">
                    {' '}
                    <a href="0#">View all notifications</a>
                  </div>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown nav-user">
              <a
                class="nav-link nav-user-img"
                href="0#"
                id="navbarDropdownMenuLink2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {/* <img
                  src="../../assets/images/avatar-1.jpg"
                  alt=""
                  class="user-avatar-md rounded-circle"
                  id="smallProfileImage"
                /> */}
                <Avatar {...stringAvatar('Kent Dodds')} />
              </a>
              <div
                class="dropdown-menu dropdown-menu-right nav-user-dropdown"
                aria-labelledby="navbarDropdownMenuLink2"
              >
                <div class="nav-user-info">
                  <h5 class="mb-0 text-white nav-user-name" id="iName">
                    admin
                  </h5>
                  <span class="status"></span>
                  <span class="ml-2">
                    <empty style={{ color: 'rgb(82, 243, 82);' }}>•</empty>
                    Available
                  </span>
                </div>
                <a class="dropdown-item" href="0#">
                  <i class="fas fa-user mr-2"></i>Account
                </a>
                <a class="dropdown-item" href="0#">
                  <i class="fas fa-cog mr-2"></i>Setting
                </a>
                <a class="dropdown-item" id="logoutButton" href="0">
                  <i class="fas fa-power-off mr-2"></i>Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- ============================================================== --> */}
      {/* <!-- end navbar --> */}
      {/* <!-- ============================================================== --> */}
    </>
  );
};

export default AdminNavbar;
