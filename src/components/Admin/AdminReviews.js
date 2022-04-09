// import localforage from "localforage";
import "./AdminReviews.css";
const AdminReviews = () => {
  return (
    <>
      <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
          <div class="card1">
            <span>
              <h3 id="userRating">
                User Rating :
                <small style={{ fontSize: "19px" }} id="ovrAll-Rate">
                  {" "}
                  5{" "}
                </small>
                <span class="fa fa-star checked"></span>
              </h3>
            </span>

            <p style={{ marginTop: ".6rem" }} id="overallrev">
              0 average based on 0 reviews.
            </p>
            <hr style={{ border: "3px solid #f1f1f1" }} />

            <div class="row">
              <div class="side">
                <div class="needleft">5 star</div>
              </div>
              <div class="middle">
                <div class="bar-container">
                  <div class="bar-5"></div>
                </div>
              </div>
              <div class="side right">
                <div id="fiverev">0</div>
              </div>
              <div class="side">
                <div class="needleft">4 star</div>
              </div>
              <div class="middle">
                <div class="bar-container">
                  <div class="bar-4"></div>
                </div>
              </div>
              <div class="side right">
                <div id="fourrev">0</div>
              </div>
              <div class="side">
                <div class="needleft">3 star</div>
              </div>
              <div class="middle">
                <div class="bar-container">
                  <div class="bar-3"></div>
                </div>
              </div>
              <div class="side right">
                <div id="threerev">0</div>
              </div>
              <div class="side">
                <div class="needleft">2 star</div>
              </div>
              <div class="middle">
                <div class="bar-container">
                  <div class="bar-2"></div>
                </div>
              </div>
              <div class="side right">
                <div id="tworev">0</div>
              </div>
              <div class="side">
                <div class="needleft">1 star</div>
              </div>
              <div class="middle">
                <div class="bar-container">
                  <div class="bar-1"></div>
                </div>
              </div>
              <div class="side right">
                <div id="onerev">0</div>
              </div>
            </div>
          </div>
          <div class="card1">
            <div class="d-flex" style={{ marginTop: "2rem;" }}>
              <div>
                <h3 class="h3tag">User Reviews</h3>
              </div>
              <div>
                <select
                  onchange="reviewSort(this.value)"
                  class="form-control"
                  style={{
                    width: "90%",
                    marginTop: "-.5rem",
                    marginLeft: "1rem"
                  }}
                >
                  <option value="6"> All ★</option>
                  <option value="5"> ★ Five Star</option>
                  <option value="4"> ★ Four Star</option>
                  <option value="3"> ★ Three Star</option>
                  <option value="2"> ★ Two Star</option>
                  <option value="1"> ★ One Star</option>
                </select>
              </div>
            </div>
            <div class="needtop10px">
              <div class="container">
                <div class="row text-center" id="reviewsContainer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminReviews;
