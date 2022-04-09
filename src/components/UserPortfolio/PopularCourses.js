function Courses() {
  return (
    <div class="home-top-cour d-flex">
      {/* <!--POPULAR COURSES IMAGE--> */}
      <div class="col-md-3 align-self-center">
        {' '}
        <img
          src="https://manual-handling.ie/wp-content/uploads/2021/03/2.png"
          alt="img"
        />{' '}
      </div>
      {/* <!--POPULAR COURSES: CONTENT--> */}
      <div class="col-md-9 home-top-cour-desc">
        <a href="/">
          <h3>Course 1</h3>
        </a>
        <p>
          Classes started from coming friday(21 jun 2021),total seats 72 and
          available seats 10
        </p>{' '}
        <span class="home-top-cour-rat">4.2</span>
        <div class="hom-list-share">
          <div className="d-flex justify-content-between">
            <div>
              <a href="#/" className="btn btn-md btn-primary btn-block">
                <i class="fas fa-book" aria-hidden="true"></i> View Course
              </a>{' '}
            </div>
            <div>
              <a href="#/" className="btn btn-outline-dark d-none d-md-block">
                <i class="fas fa-eye" aria-hidden="true"></i>10 Aavailable
              </a>{' '}
            </div>
            <div>
              <a
                href="#/"
                className="btn btn-outline-dark btn btn-block d-none d-md-block"
              >
                <i class="fas fa-share-alt" aria-hidden="true"></i> 570
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PopularCourses = () => {
  return (
    <>
      {/* <!-- POPULAR COURSES --> */}
      <section class="pop-cour">
        <div class="container mt-5">
          <div class="row">
            <div class="con-title">
              <h2>
                Popular <span>Courses</span>
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div>
                <Courses />
                <Courses />
                <Courses />
                <Courses />
              </div>
            </div>
            <div class="col-md-6">
              <Courses />
              <Courses />
              <Courses />
              <Courses />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCourses;
