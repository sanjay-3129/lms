import FacultyModal from "../../reusable/AdminFaculty/FacultyModal";
import "./AdminFaculty.css";
import "./AdminFaculties.css";
import { useEffect, useState } from "react";
import { collection, getDocs, db } from "../../services/firebase";
const AdminFaculty = () => {
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    getFacultyDetails();
  }, []);
  var domain = "asdf.domain.com";
  let facultyArray = [];
  const getFacultyDetails = async () => {
    const facultyRef = collection(db, "secondary", domain, "faculties");
    await getDocs(facultyRef).then((facultyArr) => {
      facultyArr.forEach((fac) => {
        facultyArray.push(fac.data());
      });
      setFaculties([...faculties, ...facultyArray]);
    });
  };
  console.log("Final>>>", faculties);
  return (
    <>
      <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
          <br />
          <br />
          <div class="rt">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#home">
                  Existing Faculty
                </a>
              </li>
              <div className="ml-2">
                <li class="nav-item">
                  {/* <button
                    type="button"
                    onclick="Adding()"
                    id="but1"
                    class="btn btn-sm btn-primary"
                    style={{ marginLeft: "5.1rem", marginTop: "0.7rem" }}
                  >
                    Add New
                  </button> */}
                  <FacultyModal value={{ faculties, setFaculties }} />
                </li>
              </div>
            </ul>
          </div>
          <div class="tab-content">
            {/* <!-- home --> */}
            <div class="tab-pane container active" id="home">
              <br />
              <br />
              <div id="search">
                <form class="d-flex">
                  <div style={{ width: "30%" }}>
                    <input
                      type="text"
                      placeholder="Search.."
                      class="form-control"
                      id="searchfaccccc"
                    />
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div style={{ marginTop: "5px" }}>
                    <button
                      type="button"
                      class="btn btn-sm btn-primary"
                      style={{ marginLeft: "1.8rem" }}
                      onclick="searchForFaculty()"
                    >
                      <i
                        class="fa fa-search newsearch"
                        style={{ cursor: "pointer;" }}
                      ></i>
                    </button>
                  </div>
                </form>
                <br />
                <br />
                <div class="tab1">
                  {/* <!--tab1content--> */}

                  <div class="table1" style={{ width: "100%" }} id="pager">
                    <div class="card">
                      <div class="card-body p-0">
                        <div class="table-responsive">
                          <div class="table">
                            <div class="row m-0 bg-light">
                              <div class="col-1 p-1 text-center">No.</div>
                              <div class="col-1 p-1">Profile</div>
                              <div class="col-2 p-1">Name</div>
                              <div class="col-3 p-1">Email</div>
                              <div class="col-2 p-1">Qualification</div>
                              <div class="col-2 p-1 text-center">
                                Default Password
                              </div>
                              <div class="col-1 p-1 text-center">Action</div>
                            </div>
                            <div id="facListContainer">
                              {faculties.length > 0 ? (
                                faculties.map((faculty, idx) => (
                                  <div
                                    class="row m-0 align-items-center"
                                    key={idx}
                                  >
                                    <div class="col-1 p-1 text-center">
                                      {idx + 1}
                                    </div>
                                    <div class="col-1 p-1">
                                      <img
                                        className="img-fluid"
                                        style={{ radius: "10px" }}
                                        src={faculty?.profile}
                                        alt="logo"
                                      ></img>
                                    </div>
                                    <div class="col-2 p-1">{faculty?.name}</div>
                                    <div class="col-3 p-1">
                                      {faculty?.email}
                                    </div>
                                    <div class="col-2 p-1">
                                      {faculty?.qualification}
                                    </div>
                                    <div class="col-2 p-1 text-center">
                                      {faculty?.default_password}
                                    </div>
                                    {/* <div class="col-1 p-1 text-center">
                                      {faculty?.cost}
                                    </div> */}
                                  </div>
                                ))
                              ) : (
                                <div
                                  style={{ margin: "1rem", padding: "1rem" }}
                                >
                                  Loading Faculties...
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
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

export default AdminFaculty;
