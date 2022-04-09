// const UserMyCourses = () => {
//   return (
//     <>
//       <div class="col-md-9 col-lg-10 col-xl-10 scrollbar">
//         <div class="dashboard" style={{ marginTop: "1rem" }}>
//           <p class="title m-0">Courses</p>
//           <p class="link m-0">
//             <a href="index.html">Home</a>&ensp;/&ensp;Dashboard
//           </p>
//         </div>
//         <div className="course-list">
//           <div className="list-header">
//             <h4>Ongoing</h4>
//             <ul className="list dropdown">
//               <li
//                 className="dropdown-toggle"
//                 id="navbardrop"
//                 data-toggle="dropdown"
//               >
//                 <span>Sort By</span>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a className="list-item" href="#d">
//                       Recent
//                     </a>
//                   </li>
//                   <li>
//                     <a className="list-item" href="#d">
//                       Latest
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>

//           <div className="courses">
//             <div className="add">
//               <div className="row m-0">
//                 <div className="col-sm-4 col-md-3 p-0">
//                   <div className="thumb">
//                     <img
//                       className="img-fluid"
//                       alt="course"
//                       src="/images/wd_img.jpg"
//                     />
//                     <div className="overlay">
//                       <form action="user-courseview.html" method="get">
//                         <button type="submit" className="btn">
//                           Continue
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-sm-8 col-md-9">
//                   <h4>Category</h4>
//                   <p className="completed">
//                     <span className="percent">45</span>%&ensp;Completed
//                   </p>
//                   <p className="title">Title of the Course Goes Here</p>
//                   <p className="about">
//                     Lorem ipsum dolor sit amet, est ei idque voluptua copiosae,
//                     pro detracto disputando reformidans at, ex vel suas eripuit.
//                     Vel alii zril maiorum ex, mea id sale eirmod epicurei. Sit
//                     te possit senserit, eam alia veritus maluisset ei, id cibo
//                     vocent ocurreret per. Te qui doming doctus referrentur, usu
//                     debet tamquam et.
//                   </p>
//                   <div className="footer">
//                     <p>
//                       <i className="far fa-user"></i>
//                       <small className="value">154</small>
//                     </p>
//                     <p>
//                       <i className="far fa-comment-alt"></i>
//                       <small className="value">25</small>
//                     </p>
//                     <p>
//                       <span className="fa fa-star"></span>
//                       <span className="fa fa-star"></span>
//                       <span className="fa fa-star"></span>
//                       <span className="fa fa-star"></span>
//                       <span className="fa fa-star"></span>
//                       <small className="value">(5)</small>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>


//           </div>
//         </div>
//         {/* <!--------------------- Purchased Course Details ----------------------------------> */}
//         <div class="course-list">
//           {/* <!----------------- Header -----------------------> */}
//           <div class="list-header">
//             <h4>My Courses</h4>
//             <ul class="list dropdown">
//               <li
//                 class="dropdown-toggle"
//                 id="navbardrop"
//                 data-toggle="dropdown"
//               >
//                 <span>Sort By</span>
//                 <ul class="dropdown-menu">
//                   <li>
//                     <a class="list-item">Recent</a>
//                   </li>
//                   <li>
//                     <a class="list-item">Latest</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//           {/* <!---------------- Course Body ------------------------------> */}
//           <div class="courses">
//             {/* <!-- SINGLE Course --> */}
//             <div class="add">
//               <div class="row m-0">
//                 <div class="col-sm-4 col-md-3 p-0">
//                   <div class="thumb">
//                     <img class="img-fluid" src="/images/wd_img.jpg" />
//                     <div class="overlay">
//                       <form action="user-courseview.html" method="get">
//                         <button type="submit" class="btn">
//                           View
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-sm-8 col-md-9">
//                   <h4>Category</h4>
//                   <p class="title">Title of the Course Goes Here</p>
//                   <p class="about">
//                     Lorem ipsum dolor sit amet, est ei idque voluptua copiosae,
//                     pro detracto disputando reformidans at, ex vel suas eripuit.
//                     Vel alii zril maiorum ex, mea id sale eirmod epicurei. Sit
//                     te possit senserit, eam alia veritus maluisset ei, id cibo
//                     vocent ocurreret per. Te qui doming doctus referrentur, usu
//                     debet tamquam et.
//                   </p>
//                   <div class="footer">
//                     <p>
//                       <i class="far fa-user"></i>
//                       <small class="value">154</small>
//                     </p>
//                     <p>
//                       <i class="far fa-comment-alt"></i>
//                       <small class="value">25</small>
//                     </p>
//                     <p>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <small class="value">(5)</small>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <!----------/ /----------------> */}
//             <div class="add">
//               <div class="row m-0">
//                 <div class="col-sm-4 col-md-3 p-0">
//                   <div class="thumb">
//                     <img class="img-fluid" src="/images/wd_img.jpg" />
//                     <div class="overlay">
//                       <form action="user-courseview.html" method="get">
//                         <button type="submit" class="btn">
//                           View
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-sm-8 col-md-9">
//                   <h4>Category</h4>
//                   <p class="title">Title of the Course Goes Here</p>
//                   <p class="about">
//                     Lorem ipsum dolor sit amet, est ei idque voluptua copiosae,
//                     pro detracto disputando reformidans at, ex vel suas eripuit.
//                     Vel alii zril maiorum ex, mea id sale eirmod epicurei. Sit
//                     te possit senserit, eam alia veritus maluisset ei, id cibo
//                     vocent ocurreret per. Te qui doming doctus referrentur, usu
//                     debet tamquam et.
//                   </p>
//                   <div class="footer">
//                     <p>
//                       <i class="far fa-user"></i>
//                       <small class="value">154</small>
//                     </p>
//                     <p>
//                       <i class="far fa-comment-alt"></i>
//                       <small class="value">25</small>
//                     </p>
//                     <p>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <small class="value">(5)</small>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <!-----------/ /---------------> */}
//             <div class="add">
//               <div class="row m-0">
//                 <div class="col-sm-4 col-md-3 p-0">
//                   <div class="thumb">
//                     <img class="img-fluid" src="/images/wd_img.jpg" />
//                     <div class="overlay">
//                       <form action="user-courseview.html" method="get">
//                         <button type="submit" class="btn">
//                           View
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-sm-8 col-md-9">
//                   <h4>Category</h4>
//                   <p class="title">Title of the Course Goes Here</p>
//                   <p class="about">
//                     Lorem ipsum dolor sit amet, est ei idque voluptua copiosae,
//                     pro detracto disputando reformidans at, ex vel suas eripuit.
//                     Vel alii zril maiorum ex, mea id sale eirmod epicurei. Sit
//                     te possit senserit, eam alia veritus maluisset ei, id cibo
//                     vocent ocurreret per. Te qui doming doctus referrentur, usu
//                     debet tamquam et.
//                   </p>
//                   <div class="footer">
//                     <p>
//                       <i class="far fa-user"></i>
//                       <small class="value">154</small>
//                     </p>
//                     <p>
//                       <i class="far fa-comment-alt"></i>
//                       <small class="value">25</small>
//                     </p>
//                     <p>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                       <small class="value">(5)</small>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <!---------/ /---------------> */}
//           </div>
//           {/* <!------------------- Course Body Ends -------------------------------------> */}
//           <div class="end">No More Courses</div>
//         </div>
//         {/* <!---------------Purchased Course Details Ends---------------------------> */}

//         {/* <!-------- Footer ----------> */}
//         <div class="footer_bottom_area">
//           <div class="container">
//             <div class="row">
//               <div class="col-lg-6 offset-lg-3">
//                 <div class="copyright-widget text-center">
//                   <p>Copyright LMS &copy; 2021. All Rights Reserved.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!-------- Footer ----------> */}
//       </div>
//       {/* <!-- Column Ends --> */}
//     </>
//   );
// };

// export default UserMyCourses;

import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CourseCard from "../../reusable/CourseCards/CourseCard";
import { db, doc, setDoc, collection } from "../../services/firebase";

const UserMyCourses = (props) => {
  // const test = async () => {
  //   const dataTobeStored = {
  //     courses: [
  //       {
  //         completed_percent: "20",
  //         bought_timestamp: "",
  //         course_duration: 200,
  //         course_id: "QAnlykzIROCqOjjeqBbv",
  //         course_ref: "/basic/test/courses/QAnlykzIROCqOjjeqBbv",
  //         course_valid: true
  //       }
  //     ]
  //   };
  //   // /students/s6sdkkradZfzX1AMNYhuYSxS1HI2/user_course_details/vfgzg.csb.app
  //   await setDoc(
  //     doc(
  //       db,
  //       "students",
  //       "sx1dxtzakIOeFneQ63XFN8z6LIA3",
  //       "user_course_details",
  //       "siteDomain"
  //     ),
  //     dataTobeStored
  //   );
  // };
  const [userDetails, setUserDetails] = useOutletContext([]);
  const [mycourse, setMycourse] = useState(null);
  useEffect(() => {
    setMycourse(userDetails);
  }, [mycourse]);
  console.log("from user My courses ", userDetails.courses);
  // let course = mycourse?.courses?.map((course) => (
  //   <CourseCard key={course.course_id} course={course} />
  // ));
  // let courselist = null;
  // if (userDetails.length > 0) {
  //   courselist = userDetails?.map((course) => (
  //     <CourseCard key={course.course_id} course={course} />
  //   ));
  // }
  // console.log("logo", userDetails?.courses?.logo);
  return (
    <>
      <div class="col-md-9 col-lg-10 col-xl-10 scrollbar" style={{margin: "auto"}}>
        <div class="dashboard" style={{ marginTop: "1rem" }}>
          <p class="title m-0">Courses</p>
          <p class="link m-0">
            <a href="index.html">Home</a>&ensp;/&ensp;Dashboard
          </p>
        </div>
        {/* <button
          type="button "
          className="btn btn-sm btn-primary send"
          style={{ marginLeft: "4.5rem", width: "40%" }}
          onClick={test}
        >
          Add Dummy data
        </button> */}
        <div className="course-list">
          <div className="list-header">
            <h4>Ongoing</h4>

            <ul className="list dropdown">
              <li
                className="dropdown-toggle"
                id="navbardrop"
                data-toggle="dropdown"
              >
                <span>Sort By</span>
                <ul className="dropdown-menu">
                  <li>
                    <a className="list-item" href="#d">
                      Recent
                    </a>
                  </li>
                  <li>
                    <a className="list-item" href="#d">
                      Latest
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="courses">
            {/* {course} */}
            {mycourse &&
              mycourse?.courses?.map((course) => (

                < CourseCard key={course.courseId} course={course} />
              ))}
          </div>
        </div>
        {/* <!--------------------- Purchased Course Details ----------------------------------> */}
        <div class="course-list">
          {/* <!----------------- Header -----------------------> */}
          <div class="list-header">
            <h4>Completed Courses</h4>
            <ul class="list dropdown">
              <li
                class="dropdown-toggle"
                id="navbardrop"
                data-toggle="dropdown"
              >
                <span>Sort By</span>
                <ul class="dropdown-menu">
                  <li>
                    <a class="list-item" href="/">
                      Recent
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="/">
                      Latest
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!---------------- Course Body ------------------------------> */}
          <div className="courses">
            {/* {userDetails &&
              userDetails?.completed_courses?.map((course) => (
                <CourseCard key={course.course_id} course={course} />
              ))} */}
          </div>
          {/* <!------------------- Course Body Ends -------------------------------------> */}
          <div class="end">No More Courses</div>
        </div>
        {/* <!---------------Purchased Course Details Ends---------------------------> */}

        {/* <!-------- Footer ----------> */}
        <div class="footer_bottom_area">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="copyright-widget text-center">
                  <p>Copyright LMS &copy; 2021. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-------- Footer ----------> */}
      </div>
      {/* <!-- Column Ends --> */}
    </>
  );
};

export default UserMyCourses;

