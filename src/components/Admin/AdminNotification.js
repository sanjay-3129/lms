import "./AdminNotification.css";

const AdminNotification = () => {
  return (
    <>
      <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
          <div class="d-flex" style={{ justifyContent: "space-between" }}>
            <div>
              <h3 class="classh3">Notification</h3>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <button class="btn btn-sm btn-primary">Clear all</button>
              <button
                class="btn btn-sm btn-primary"
                style={{ marginLeft: "-.5rem" }}
              >
                <i class="fas fa-sync-alt"></i>
              </button>
            </div>
          </div>
          <div class="card1">
            <div class="crossandname">
              <div>
                <small class="smalltag">Message from Joker.</small>
              </div>
              <div>
                <i class="fas fa-times" style={{ cursor: "pointer" }}></i>
              </div>
            </div>

            <div class="imgandcontent">
              <div class="imageuser">
                <img
                  src="usrimg.png"
                  class="img-responsive"
                  alt=""
                  width="50"
                  style={{ objectFit: "cover" }}
                />
                <br />
                <p style={{ marginLeft: "5px" }}>Sandy</p>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  sapien augue, dictum et gravida et Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Proin sapien augue, dictum et
                  gravida et.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* <!-- CARD1-DIV --> */}

          <small style={{ marginLeft: "2rem;" }}>13:22 / 02-03-21</small>
        </div>
        {/* <!-- D-ECOM-DIV --> */}
      </div>
      {/* <!-- D-WRAP-DIV -->; */}
    </>
  );
};

export default AdminNotification;
