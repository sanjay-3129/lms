// import { Outlet } from "react-router-dom";
// import UserNavbar from "../../components/User/UserNavbar";
// import UserSidebar from "../../components/User/UserSidebar";
// import "../../pages/Enduser/User.css";
// import { useEffect, useState } from "react";
// import { db, doc } from "../../services/firebase";
// import { getUserDetails } from "../../api/end-user";
// const User = () => {
//   const [userDetails, setUserDetails] = useState([]);
//   const [error, setError] = useState(false);
//   useEffect(() => {
//     const domain = "vfgzg.csb.app";
//     const studentId = "cl9ynT5FlnC6GcYbB64x";

//     const studentDocRef = doc(
//       db,
//       "students",
//       studentId,

//     );
//     getUserDetails(db, studentId, domain, studentDocRef, (data) => {
//       if (data === 0) {
//         setError("Access Deined, Please buy the package to use further!!!");
//       } else {
//         setUserDetails(data);
//       }
//     });
//   }, []);




//   return (
//     <>
//       <header id="header">
//         <div class="container">
//           <div class="logo float-left">
//             <h1 class="text-light">
//               <a href="#intro" class="scrollto">
//                 <span>LMS</span>
//               </a>
//             </h1>
//           </div>
//           <UserNavbar />
//         </div>
//       </header>
//       <section style={{ backgroundColor: "#f9fafc" }}>
//         <div class="container-fluid mt60">
//           <div class="row m-0">
//             <UserSidebar />
//             <Outlet />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default User;

import { Outlet } from "react-router-dom";
import UserNavbar from "../../components/User/UserNavbar";
import UserSidebar from "../../components/User/UserSidebar";

import "../../pages/Enduser/User.css";
import { getUserDetails } from "../../api/end-user";

import { useEffect, useState } from "react";
import { db, doc } from "../../services/firebase";

const User = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [error, setError] = useState(false);
  const [studentDocRef, setStudentDocRef] = useState([])
  useEffect(() => {
    const domain = "asdf.domain.com";
    const studentId = "cl9ynT5FlnC6GcYbB64x";

    const docRef = doc(
      db,
      "students",
      studentId,
      "user_course_details",
      domain
    );
    setStudentDocRef(studentDocRef)
    getUserDetails(db, studentId, domain, docRef, (data) => {
      if (data === 0) {
        setError("Access Deined, Please buy the package to use further!!!");
      } else {
        setUserDetails(data);
      }
    });
  }, []);

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="logo float-left">
            <h1 className="text-light">
              <a href="#intro" className="scrollto">
                <span>LMS</span>
              </a>
            </h1>
          </div>
          <UserNavbar />
        </div>
      </header>
      <section style={{ backgroundColor: "#f9fafc" }}>
        <div className="container-fluid mt60">
          <div className="row m-0">
            <UserSidebar />
            <div className="col-md-10">
              <Outlet context={[userDetails, setUserDetails]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
