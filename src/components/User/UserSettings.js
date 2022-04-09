// import $ from "jquery";

import { useState, useEffect } from "react";
import { auth } from "../../services/firebase";
import { getUserDetails } from "../../api/end-user";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

import {
  storage,
  ref,
  collection,
  getDocs,
  db,
  doc,
  getDoc,
  uploadBytes,
  updateDoc,
  getDownloadURL
} from "../../services/firebase";
function changePassword() {
  var emailAddress = document.getElementById("enteredEmail").value;
  sendPasswordResetEmail(auth, emailAddress)
    .then(function () {
      window.alert("Password Reset Email has been Sent");
    })
    .catch(function (error) {
      window.alert(error)
    });

  console.log("from change password func");
}
const UserSettings = () => {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [mobileNumber, setMobileNumber] = useState(null)
  const [email, setEmail] = useState(null)
  const [profileImg, setProfileImg] = useState(null)
  const [studentData, setStudentData] = useState(null)
  const domain = "vfgzg.csb.app";
  const studentId = "cl9ynT5FlnC6GcYbB64x";

  const studentDocRef = doc(
    db,
    "students",
    studentId,

  );
  useEffect(() => {
    getDoc(studentDocRef).then((studentData) => {
      console.log("student Data", studentData.data())
      setStudentData(studentData.data())
    })
    setFirstName(studentData?.first_name)
    setLastName(studentData?.last_name)
    setMobileNumber(studentData?.mobile)
    setProfileImg(studentData?.profileImg)
    setEmail(studentData?.email)

  }, []);
  console.log("firstName", firstName)

  const saveButtonPressed = () => {
    if (firstName != null) {
      updateDoc(studentDocRef, {
        first_name: firstName
      }).then(() => {
        // console.log("Course Title Uploaded", coursetitle);
      });
    }
  }
  return (
    <>
      <div className="col-md-9 col-lg-10 col-xl-10 scrollbar" style={{margin: "auto"}}>
        {/* <!-------- Dashboard ----------> */}
        <div className="dashboard" style={{ marginTop: '1rem' }}>
          <p className="title m-0">Settings</p>
          <p className="link m-0">
            <a href="index.html">Home</a>&ensp;/&ensp;Dashboard
          </p>
        </div>
        {/* <!----------------------------> */}

        {/* <!---------- Settings -----------> */}
        <div className="settings">
          {/* <!----------- Header -----------> */}
          <div className="list-header">
            <h4>Personal Details</h4>
          </div>

          {/* <!-------- Personal Details ------------> */}

          <div className="personal-details">
            {/* <!-----------------------> */}
            <form className="form" action="#" method="post">
              <div className="row m-0">
                <div className="col-sm-4 col-md-4 col-lg-3 p-0">
                  <div className="upload-img">
                    {/* <input
                      type="file"
                      name="prfl_img"
                      id="img"
                      accept="image/*"
                      onChange={(e) => setProfileImg(e.target.files[0])}
                    />
                    <label for="img" id="uploadButton">
                      <span>Browse</span>
                    </label> */}
                  </div>
                </div>
                {/* <!------/ /------> */}

                <div className="col-sm-8 col-md-8 col-lg-9 p-0">
                  <div className="wrap">
                    <div className="col-lg-6">
                      <label for="fname">First Name *</label>
                      <input type="text" className="form-control" id="fname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="col-lg-6">
                      <label for="lname">Last Name</label>
                      <input type="text" className="form-control" id="lname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                  </div>

                  <div className="wrap">
                    <div className="col-lg-6">
                      <label for="mno">Mobile No *</label>
                      <input type="text" className="form-control" id="mno" value={
                        mobileNumber ? mobileNumber : studentData?.mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                    </div>
                    <div className="col-lg-6">
                      <label for="mail">Email *</label>
                      <input type="text" className="form-control" id="mail" value={email ? email : studentData?.email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>
                </div>
                {/* <!-------/ /--------> */}
              </div>

              <div className="settings-btn">
                {/* <button type="submit" className="btn">
                  Save<i className="fas fa-long-arrow-alt-right"></i>
                </button> */}
              </div>
            </form>
            {/* <!-----------------------> */}
          </div>
        </div>
        {/* <!-------------/ /------------------> */}

        {/* <!---------- Password Settings -----------> */}
        <div className="settings">
          <div className="list-header">
            <h4>Change Password</h4>
          </div>

          {/* <!-------- Password Change ------------> */}

          <div className="change-password">
            {/* <!-----------------------> */}
            {/* <form className="form" action="#" method="post"> */}
            {/* <div className="row">
                <div className="col-lg-6">
                  <label for="oldpass">Old Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="oldpass"
                  />

                  <label for="newpass">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="newpass"
                  />

                  <label for="confirmpass">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmpass"
                  />
                </div>
              </div> */}


            {/* <div className="settings-btn">
                <button type="submit" className="btn">
                  Save<i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </form> */}
            <div className="tab-content">
              Password reset mail will be sent to your registered Email Account
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
                        value={email ? email : studentData?.email}
                        disabled
                      />
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2" style={{ textAlign: "center" }}>

                      <div className="settings-btn">
                        <button type="submit" className="btn" onClick={changePassword}>
                          Send<i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                      </div>
                      {/* <div className="settings-btn">
                        <button
                          type="button"
                          id="btn"
                          className="fas fa-long-arrow-alt-right"

                          onClick={changePassword}
                        >
                          Send
                        </button>{" "}
                      </div> */}
                      {/* &nbsp;{" "} */}
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
            {/* <!-----------------------> */}
          </div>

          {/* <!---------------/ /------------------> */}
        </div>
        {/* <!------------------------------->

                    <!-------- Footer ----------> */}
        <div className="footer_bottom_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="copyright-widget text-center">
                  <p>Copyright LMS &copy; 2021. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
