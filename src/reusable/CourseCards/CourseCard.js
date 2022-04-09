import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    console.log("last course", course);
    return (
        <>
            <div className="add">
                <div className="row m-0">
                    <div className="col-sm-4 col-md-3 p-0">
                        <div className="thumb">
                            <img
                                className="img-fluid"
                                alt="course"
                                src={course?.courseLogo}
                            />
                            <div className="overlay">
                                <Link
                                    to={`/user/courseContent/${course.courseId}`}
                                    class="btn"
                                    style={{ cursor: "pointer;" }}
                                >
                                    Continue
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-9">
                        <h4>Category</h4>
                        <p className="completed">
                            <span className="percent">45</span>%&ensp;Completed
                        </p>
                        <p className="title">{course?.courseName}</p>
                        <p className="about">{course?.courseDescription}</p>
                        <div className="footer">
                            <p>
                                <i className="far fa-user"></i>
                                <small className="value">{course?.NoOfStudents}</small>
                            </p>
                            <p>
                                <i className="far fa-comment-alt"></i>
                                <small className="value">{course?.reviews?.length}</small>
                            </p>
                            <p>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <small className="value">(5)</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CourseCard;
