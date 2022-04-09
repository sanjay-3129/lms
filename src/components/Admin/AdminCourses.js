import { useOutletContext, useNavigate } from "react-router-dom";
import "./AdminCourses.css";
import "./AdminCourse-edit.css";
import "./AdminCourses-edit.css";
import "./AdminReviews.css";
// import "./AdminCoursesHeadtag.css";
import CourseCard from "./../../reusable/AdminCourses/CourseCard";

const Admincourses = () => {
  const [details, setDetails] = useOutletContext();
  console.log("Admincourses>>", details);
  const navigate = useNavigate();

  return (
    <>
      <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
          <div id="cardss " style={{ display: "block", alignItems: "center", padding: "0 30px", marginTop: "20px" }}>
            <button
              type="button"
              class="btn btn-sm btn-primary addibtn"
              onClick={() => navigate("/admin/add-new-course")}
              style={{
                width: "14%",
                padding: "0px",
                fontSize: "14px"
               
              }}
              id="addbtns"
            >
             ADD NEW COURSE
            </button>
          </div>
          <div
            class="row"
            style={{
              marginRight: "2rem",
            }}
          >
            {Array.isArray(details) &&
              details?.map((category) => (
                <>
                  {category?.courses?.map((course) => (
                    <CourseCard course={course} />
                  ))}
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Admincourses;
