import "./AdminPayment.css";
import "../../pages/Admin/Admin.css";
const AdminPayment = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-ecommerce">
          <div className="cardds">
            <ul
              className="nav nav-pills mb-3 justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Courses Revenue
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Payment Gateway
                </a>
              </li>
              {/*  <li className="nav-item" role="presentation">
                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                        </li>  */}
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="d-flex">
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="card"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                      }}
                    >
                      <div className="card-body">
                        <h4 style={{ color: "#5e72e4" }}>Web Development</h4>
                        <h5 className="mb-1" id="facultyCount">
                          30+ students
                        </h5>

                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 12,000
                          </span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="card"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                      }}
                    >
                      <div className="card-body">
                        <h4 style={{ color: "#5e72e4" }}>Java</h4>
                        <h5 className="mb-1" id="facultyCount">
                          40+ students
                        </h5>

                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 13,000
                          </span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="card"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                      }}
                    >
                      <div className="card-body">
                        <h4 style={{ color: "#5e72e4" }}>Machine Learning</h4>
                        <h5 className="mb-1" id="facultyCount">
                          130+ students
                        </h5>

                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 15,000
                          </span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="card"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                      }}
                    >
                      <div className="card-body">
                        <h4 style={{ color: "#5e72e4" }}>C Program</h4>
                        <h5 className="mb-1" id="facultyCount">
                          80+ students
                        </h5>

                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 10,000
                          </span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- SECOND --> */}

                <div className="d-flex">
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="card"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                      }}
                    >
                      <div className="card-body">
                        <h4 style={{ color: "#5e72e4" }}>C++</h4>
                        <h5 className="mb-1" id="facultyCount">
                          30+ students
                        </h5>

                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 2,000
                          </span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="card"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                      }}
                    >
                      <div className="card-body">
                        <h4 style={{ color: "#5e72e4" }}>Python</h4>
                        <h5 className="mb-1" id="facultyCount">
                          300+ students
                        </h5>

                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 24,000
                          </span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="card"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                      }}
                    >
                      <div className="card-body">
                        <h4 style={{ color: "#5e72e4" }}>Go Lang</h4>
                        <h5 className="mb-1" id="facultyCount">
                          20+ students
                        </h5>

                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 5,000
                          </span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    style={{ cursor: "pointer " }}
                  >
                    <div
                      className="card"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
                      }}
                    >
                      <div className="card-body">
                        <h4 style={{ color: "#5e72e4" }}>Linux & Unix</h4>
                        <h5 className="mb-1" id="facultyCount">
                          30+ students
                        </h5>

                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 1,20,000
                          </span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <i
                    className="fas fa-long-arrow-alt-down"
                    style={{ fontSize: "2rem", color: "#000" }}
                  ></i>
                  <h3>Total</h3>
                </div>

                <div className="needcenter">
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="card"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                      }}
                    >
                      <div className="card-body">
                        <h4 style={{ color: "#5e72e4" }}>All Courses</h4>
                        <h5 className="mb-1" id="facultyCount">
                          1330+ students
                        </h5>

                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 2,00,000
                          </span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                .2..
              </div>
              {/* <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPayment;
