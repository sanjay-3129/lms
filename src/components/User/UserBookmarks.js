// const UserBookmarks = () => {
//   return (
//     <>
//       <div class="col-md-9 col-lg-10 col-xl-10 scrollbar">
//         {/* <!-------- Dashboard ----------> */}
//         <div class="dashboard" style={{ marginTop: "1rem" }}>
//           <p class="title m-0">Bookmarks</p>
//           <p class="link m-0">
//             <a href="index.html">Home</a>&ensp;/&ensp;Dashboard
//           </p>
//         </div>
//         {/* <!----------------------------> */}

//         {/* <!-- Bookmarked Courses --> */}
//         <div class="marked">
//           {/* <!----------------- Header -----------------------> */}
//           <div class="list-header">
//             <h4>Browse Your Favourites</h4>
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
//           {/* <!-------------------------------------------------> */}
//           <div class="row p20">
//             {/* <!-- Added Course --> */}
//             <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
//               <div class="card">
//                 <div class="thumb">
//                   <img
//                     class="card-img"
//                     src="/images/wd_img.jpg"
//                     alt="Card_image"
//                   />
//                   <div class="fav">
//                     <span>
//                       <i
//                         class="far fa-minus-square"
//                         data-toggle="tooltip"
//                         data-placement="left"
//                         title="Remove"
//                       ></i>
//                     </span>
//                   </div>
//                   <div class="img_overlay">
//                     <div class="center">Preview Course</div>
//                   </div>
//                   <a href="courses_single.html" class="stretched-link"></a>
//                 </div>
//                 <div class="card-body">
//                   <p>
//                     Author's Name
//                     <span>
//                       <a class="view_more" href="#">
//                         view more
//                       </a>
//                     </span>
//                   </p>
//                   <h3 class="card-title">Title of the course goes here</h3>
//                   <p class="card-text">
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                   </p>
//                   <hr />
//                   <p class="card_footer">
//                     <a class="sdt" href="courses_single.html">
//                       <i class="far fa-user"></i>121
//                     </a>
//                     <a class="price" href="courses_single.html">
//                       <i class="fas fa-rupee-sign"></i>875.25
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* <!-------/ /------->
//                             <!-- Added Course --> */}
//             <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
//               <div class="card">
//                 <div class="thumb">
//                   <img
//                     class="card-img"
//                     src="/images/wd_img.jpg"
//                     alt="Card_image"
//                   />
//                   <div class="fav">
//                     <span>
//                       <i
//                         class="far fa-minus-square"
//                         data-toggle="tooltip"
//                         data-placement="left"
//                         title="Remove"
//                       ></i>
//                     </span>
//                   </div>
//                   <div class="img_overlay">
//                     <div class="center">Preview Course</div>
//                   </div>
//                   <a href="#0" class="stretched-link"></a>
//                 </div>
//                 <div class="card-body">
//                   <p>
//                     Author's Name
//                     <span>
//                       <a class="view_more" href="#0">
//                         view more
//                       </a>
//                     </span>
//                   </p>
//                   <h3 class="card-title">Title of the course goes here</h3>
//                   <p class="card-text">
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                   </p>
//                   <hr />
//                   <p class="card_footer">
//                     <a class="sdt" href="courses_single.html">
//                       <i class="far fa-user"></i>121
//                     </a>
//                     <a class="price" href="courses_single.html">
//                       <i class="fas fa-rupee-sign"></i>875.25
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* <!-------/ /------->
//                             <!-- Added Course --> */}
//             <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
//               <div class="card">
//                 <div class="thumb">
//                   <img
//                     class="card-img"
//                     src="/images/wd_img.jpg"
//                     alt="Card_image"
//                   />
//                   <div class="fav">
//                     <span>
//                       <i
//                         class="far fa-minus-square"
//                         data-toggle="tooltip"
//                         data-placement="left"
//                         title="Remove"
//                       ></i>
//                     </span>
//                   </div>
//                   <div class="img_overlay">
//                     <div class="center">Preview Course</div>
//                   </div>
//                   <a href="0" class="stretched-link"></a>
//                 </div>
//                 <div class="card-body">
//                   <p>
//                     Author's Name
//                     <span>
//                       <a class="view_more" href="#0">
//                         view more
//                       </a>
//                     </span>
//                   </p>
//                   <h3 class="card-title">Title of the course goes here</h3>
//                   <p class="card-text">
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                   </p>
//                   <hr />
//                   <p class="card_footer">
//                     <a class="sdt" href="courses_single.html">
//                       <i class="far fa-user"></i>121
//                     </a>
//                     <a class="price" href="courses_single.html">
//                       <i class="fas fa-rupee-sign"></i>875.25
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* <!-------/ /------->
//                             <!-- Added Course --> */}
//             <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
//               <div class="card">
//                 <div class="thumb">
//                   <img
//                     class="card-img"
//                     src="/images/wd_img.jpg"
//                     alt="Card_image"
//                   />
//                   <div class="fav">
//                     <span>
//                       <i
//                         class="far fa-minus-square"
//                         data-toggle="tooltip"
//                         data-placement="left"
//                         title="Remove"
//                       ></i>
//                     </span>
//                   </div>
//                   <div class="img_overlay">
//                     <div class="center">Preview Course</div>
//                   </div>
//                   <a href="courses_single.html" class="stretched-link"></a>
//                 </div>
//                 <div class="card-body">
//                   <p>
//                     Author's Name
//                     <span>
//                       <a class="view_more" href="#0">
//                         view more
//                       </a>
//                     </span>
//                   </p>
//                   <h3 class="card-title">Title of the course goes here</h3>
//                   <p class="card-text">
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                   </p>
//                   <hr />
//                   <p class="card_footer">
//                     <a class="sdt" href="courses_single.html">
//                       <i class="far fa-user"></i>121
//                     </a>
//                     <a class="price" href="courses_single.html">
//                       <i class="fas fa-rupee-sign"></i>875.25
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* <!-------/ /------->
//                             <!-- Added Course --> */}
//             <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
//               <div class="card">
//                 <div class="thumb">
//                   <img
//                     class="card-img"
//                     src="/images/wd_img.jpg"
//                     alt="Card_image"
//                   />
//                   <div class="fav">
//                     <span>
//                       <i
//                         class="far fa-minus-square"
//                         data-toggle="tooltip"
//                         data-placement="left"
//                         title="Remove"
//                       ></i>
//                     </span>
//                   </div>
//                   <div class="img_overlay">
//                     <div class="center">Preview Course</div>
//                   </div>
//                   <a href="courses_single.html" class="stretched-link"></a>
//                 </div>
//                 <div class="card-body">
//                   <p>
//                     Author's Name
//                     <span>
//                       <a class="view_more" href="#0">
//                         view more
//                       </a>
//                     </span>
//                   </p>
//                   <h3 class="card-title">Title of the course goes here</h3>
//                   <p class="card-text">
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                   </p>
//                   <hr />
//                   <p class="card_footer">
//                     <a class="sdt" href="courses_single.html">
//                       <i class="far fa-user"></i>121
//                     </a>
//                     <a class="price" href="courses_single.html">
//                       <i class="fas fa-rupee-sign"></i>875.25
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
//               <div class="card">
//                 <div class="thumb">
//                   <img
//                     class="card-img"
//                     src="/images/wd_img.jpg"
//                     alt="Card_image"
//                   />
//                   <div class="fav">
//                     <span>
//                       <i
//                         class="far fa-minus-square"
//                         data-toggle="tooltip"
//                         data-placement="left"
//                         title="Remove"
//                       ></i>
//                     </span>
//                   </div>
//                   <div class="img_overlay">
//                     <div class="center">Preview Course</div>
//                   </div>
//                   <a href="courses_single.html" class="stretched-link"></a>
//                 </div>
//                 <div class="card-body">
//                   <p>
//                     Author's Name
//                     <span>
//                       <a class="view_more" href="#">
//                         view more
//                       </a>
//                     </span>
//                   </p>
//                   <h3 class="card-title">Title of the course goes here</h3>
//                   <p class="card-text">
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                   </p>
//                   <hr />
//                   <p class="card_footer">
//                     <a class="sdt" href="courses_single.html">
//                       <i class="far fa-user"></i>121
//                     </a>
//                     <a class="price" href="courses_single.html">
//                       <i class="fas fa-rupee-sign"></i>875.25
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="end">No More Courses</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserBookmarks;

import { useOutletContext } from "react-router-dom";
import BookmarkCard from "../../reusable/BookmarkCards/BookmarkCard";

const UserBookmarks = () => {
  const [userDetails, setUserDetails] = useOutletContext([]);
  console.log("user bookmarks final ", userDetails?.bookmarks);
  return (
    <>
      <div className="col-md-9 col-lg-10 col-xl-10 scrollbar" style={{margin: "auto"}}>
        {/* <!-------- Dashboard ----------> */}
        <div className="dashboard" style={{ marginTop: "1rem" }}>
          <p className="title m-0">Bookmarks</p>
          <p className="link m-0">
            <a href="index.html">Home</a>&ensp;/&ensp;Dashboard
          </p>
        </div>
        {/* <!----------------------------> */}

        {/* <!-- Bookmarked Courses --> */}
        <div className="marked">
          {/* <!----------------- Header -----------------------> */}
          <div className="list-header">
            <h4>Browse Your Favourites</h4>
            <ul className="list dropdown">
              <li
                className="dropdown-toggle"
                id="navbardrop"
                data-toggle="dropdown"
              >
                <span>Sort By</span>
                <ul className="dropdown-menu">
                  <li>
                    <a className="list-item" href="/">
                      Recent
                    </a>
                  </li>
                  <li>
                    <a className="list-item" href="/">
                      Latest
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!-------------------------------------------------> */}
          <div className="row p20">
            {userDetails?.bookmarks?.map((course) => (
              <BookmarkCard key={course.courseId} course={course} />
            ))}
          </div>

          <div className="end">No More Courses</div>
        </div>
      </div>
    </>
  );
};

export default UserBookmarks;

