// import "../../assets/bootstrap.min.css";
import "./AdminSettings.css";
// import "../../../public/assets/libs/css/style.css";
// import AdminSettingsEmail from "./AdminSettingsEmail";
import { auth, sendPasswordResetEmail } from "../../services/firebase";
function changePassword() {
  var emailAddress = document.getElementById("enteredEmail").value;
  sendPasswordResetEmail(auth, emailAddress)
    .then(function () {
      window.alert("Password Reset Email has been Sent");
    })
    .catch(function (error) {
      // An error happened.
      console.log(error.message);
    });

  console.log("from change password func");
}

const AdminSettings = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-ecommerce">
          <div
            style={{
              padding: "2rem",
              backgroundColor: "#fff",
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "50px",
            }}
          >
            <div>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#home">
                    <i className="fas fa-lock"></i>&nbsp; Enter Your Registered
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane container active" id="home">
                <br />
                <table
                  className="table table-bordered"
                  style={{ textAlign: "center" }}
                >
                  <tr>
                    <td>Email Address</td>
                    <td>
                      <input
                        type="email"
                        name="enteredEmail"
                        id="enteredEmail"
                        class="form-control form-control-alternative"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2" style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        id="changePassword"
                        className="btn btn-sm btn-primary send"
                        style={{
                          backgroundColor: "green",
                          marginTop: "15px",
                          width: "8%",
                        }}
                        onClick={changePassword}
                      >
                        Send
                      </button>{" "}
                      &nbsp;{" "}
                      {/* <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        style={{
                          backgroundColor: "red",
                          marginTop: "15px",
                          width: "8%"
                        }}
                      >
                        Cancel
                      </button> */}
                    </td>
                  </tr>
                </table>
              </div>
              <div className="tab-pane container" id="menu1">
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSettings;
