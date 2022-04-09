import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
  console.log("last course", course);
  return (
    <>
      <div class="col-sm-3">
        <Link
          to={`/admin/course-edit/${course?.courseId}`}
          style={{ cursor: "pointer;" }}
          state={{ coursedata: course }}
        >
          <div
            class="card"
            style={{
              maxHeight: "100%",
              overflowY: "auto",
              width: "14rem",
              height: "20rem",
              margin: "2rem",
            }}
            // onClick={() => navigate("/admin/course-edit/" + course?.course_id)}
          >
            <img
              src={
                course?.course_cover
                  ? course?.course_cover
                  : "/images/online_course.jpeg"
              }
              class="card-img-top"
              alt="Course Cover"
            />
            <div class="card-body">
              <h5 class="card-title">{course?.courseName}</h5>
              <p class="card-text">
                No. Of Students: {course?.NoOfStudents}
                <br />
                No. OF Sections: {course?.NoOfSection}
              </p>

              <h5 class="card-title">{course?.categoryName}</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CourseCard;
