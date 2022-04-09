import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import CourseTable from "../../reusable/AdminDashboard/CourseTable";

const AdminDashboard = () => {
  const [details, setDetails] = useOutletContext();
  console.log("Dashboard =>", details);

  const [totalStudents, setTotalStudents] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);

  useEffect(() => {
    const dashboardData = () => {
      if (Array.isArray(details)) {
        let tot_course = 0;
        let tot_revenue = 0;
        let tot_studs = 0;
        console.log("Dashboard >>>", details);

        details?.map((category) => {
          tot_course += category?.NoOfcourse;
          category?.courses?.map((course) => {
            tot_studs += course?.NoOfStudents;
            tot_revenue += course?.cost * course?.NoOfStudents;
          });
        });
        setTotalRevenue(tot_revenue);
        setTotalCourses(tot_course);
        setTotalStudents(tot_studs);
      }
    };
    dashboardData();
  }, [details]);
  console.log(totalCourses, totalRevenue, totalStudents);

  return (
    <>
      <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
          <div class="container-fluid dashboard-content ">
            <div class="ecommerce-widget">
              <div class="row">
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div class="card">
                    <div class="card-body">
                      <h2 style={{ color: "#5e72e4" }}>Courses</h2>
                      <div class="metric-value d-inline-block">
                        <h3 class="mb-1" id="courseCount">
                          {totalCourses}
                        </h3>
                      </div>
                      <div class="metric-label d-inline-block float-right text-success font-weight-bold">
                        <span>
                          <i class="fas fa-book"></i>
                        </span>
                        <span></span>
                      </div>
                    </div>
                    <div id="sparkline-revenue"></div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div class="card">
                    <div class="card-body">
                      <h2 style={{ color: "#5e72e4" }}>Students</h2>
                      <div class="metric-value d-inline-block">
                        <h3 class="mb-1" id="studentCount">
                          {" "}
                          {totalStudents}
                        </h3>
                      </div>
                      <div class="metric-label d-inline-block float-right text-success font-weight-bold">
                        <span>
                          <i class="fas fa-user"></i>
                        </span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div class="card">
                    <div class="card-body">
                      <h2 style={{ color: "#5e72e4" }}>Revenue</h2>
                      <div class="metric-value d-inline-block">
                        <div style={{ display: "flex;" }}>
                          <h3 class="mb-1" id="totalRevenue">
                            {" "}
                            {totalRevenue}
                          </h3>
                        </div>
                      </div>
                      <div class="metric-label d-inline-block float-right text-success font-weight-bold">
                        <i class="fas fa-rupee-sign"></i>
                      </div>
                    </div>
                    <div id="sparkline-revenue3"></div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div class="card">
                    <div class="card-body">
                      <h2 style={{ color: "#5e72e4" }}>Name</h2>
                      <div class="metric-value d-inline-block">
                        <h6 class="mb-1">Website by</h6>
                      </div>
                      <div class="metric-label d-inline-block float-right text-secondary font-weight-bold">
                        <span>
                          <a href="#0">go to</a>
                        </span>
                      </div>
                    </div>
                    <div id="sparkline-revenue4"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="abc mt-4">
              <div class="abcd">
                <div class="card">
                  <h5 class="card-header" style={{ textAlign: "left" }}>
                    Categories
                  </h5>
                  <div class="card-body p-0">
                    <div class="table-responsive">
                      <table class="table">
                        <thead
                          class="bg-light"
                          style={{
                            fontFamily: "'Circular Std Medium'",
                            fontWeight: "normal",
                            width: "100%",
                          }}
                        >
                          {/* <th>{idx + 1}</th> */}

                          <tr>
                            <th>S.no</th>
                            <th>Courses</th>
                            <th>No of Students</th>
                            <th>Category</th>
                            <th>Cost</th>
                          </tr>
                        </thead>
                        <tbody id="dashboard-course-table">
                          {Array.isArray(details) &&
                            details?.map((category, idx) => (
                              <>
                                {/* <CategoryCard value={{ category, idx }} /> */}
                                {category?.courses?.map((course, idx) => (
                                  <CourseTable value={{ course, idx }} />
                                ))}
                              </>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
