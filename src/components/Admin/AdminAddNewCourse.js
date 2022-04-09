import "./AdminCourses.css";
import "./AdminCourse-edit.css";
import "./AdminCourses-edit.css";
import "./AdminFaculties.css";
import { generateUploadURL } from "../../services/awsS3";
import CategoryModal from "../../reusable/AdminCourses/CategoryModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  doc,
  getDocs,
  db,
  addDoc,
  updateDoc,
} from "../../services/firebase";

const AdminAddNewCourse = () => {
  const [faculties, setFaculties] = useState([]);
  const [category, setCategory] = useState([]);
  const [courseCategory, setCourseCategory] = useState(null);
  const [courseFaculty, setCourseFaculty] = useState(null);
  const [courseAssessment, setCourseAssessment] = useState(null);
  const [courseName, setCourseName] = useState(null);
  const [courseDescription, setCourseDescription] = useState(null);
  const [courseCost, setCourseCost] = useState(null);
  const [courseLogo, setCourseLogo] = useState(null);
  const [courseIntro, setCourseIntro] = useState(null);
  const [courseCover, setCourseCover] = useState(null);
  const [courseMode, setCourseMode] = useState(null);
  const [courseLanguage, setCourseLanguage] = useState(null);
  console.log("Category List", category);
  const [course, setCourse] = useState({
    course_id: "",
    course_intro: "",
    course_logo: "",
    desc: "",
    course_author: "",
    course_price: "",
    course_cover: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getFacultyDetails();
    getCategoryDetails();
    // getDetails();
  }, []);
  var domain = "asdf.domain.com";
  let facultyArray = [];
  let categoryArray = [];
  const getFacultyDetails = async () => {
    const facultyRef = collection(db, "secondary", domain, "faculties");
    await getDocs(facultyRef).then((facultyArr) => {
      facultyArr.forEach((fac) => {
        facultyArray.push(fac.data());
      });
      setFaculties([...faculties, ...facultyArray]);
    });
  };
  // const getDetails = async () => {
  //   const facultyRef = doc(db, "secondary", domain);
  //   await getDocs(facultyRef).then((facultyArr) => {
  //     console.log("🚀 ~ facultyArr", facultyArr);
  //      facultyArr.forEach((fac) => {
  //        facultyArray.push(fac.data());
  //      });
  //     setFaculties([...faculties, ...facultyArray]);
  //   });
  // };

  const getCategoryDetails = async () => {
    const categoryRef = collection(db, "secondary", domain, "category");
    await getDocs(categoryRef).then((categoryArr) => {
      categoryArr.forEach((fac) => {
        categoryArray.push(fac.data());
      });
      setCategory([...category, ...categoryArray]);
    });
  };
  console.log("Final Cat>>>", category);
  console.log("Final Fac>>>", faculties);

  const handleCreateCourse = async () => {
    const firestoreRef = await addDoc(
      collection(db, "secondary", domain, "category", courseCategory, "course"),
      {
        courseName: courseName,
      }
    );
    updateDoc(firestoreRef, {
      course_id: firestoreRef.id,
    });

    if (courseFaculty) {
      updateDoc(firestoreRef, {
        NoOfStudents: 0,
        courseAuthor: courseFaculty,
        courseCategory: courseCategory,
        desc: courseDescription,
        cost: courseCost,
        courseAssessment: courseAssessment,
        courseMode: courseMode,
        courseLanguage: courseLanguage,
      }).then(() => {
        setCourse(
          (course.course_id = firestoreRef.id),
          (course.desc = courseDescription),
          (course.course_author = courseFaculty),
          (course.course_price = courseCost)
        );
      });
    }

    // Logo Upload
    if (courseLogo) {
      (async () => {
        const url = await generateUploadURL();

        let fileLogoUrl = url.split("?")[0];

        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": courseLogo.type,
          },
          body: courseLogo,
        }).then(() => {
          updateDoc(firestoreRef, {
            course_logo: fileLogoUrl,
          }).then(() => {
            setCourse((course.course_logo = fileLogoUrl));
          });
        });
      })();
    }
    //Cover Upload

    if (courseCover) {
      (async () => {
        const url = await generateUploadURL();
        let fileCoverUrl = url.split("?")[0];

        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": courseCover.type,
          },
          body: courseCover,
        })
          .then(() => {
            updateDoc(firestoreRef, {
              course_cover: fileCoverUrl,
            });
          })
          .then(() => {
            setCourse((course.course_cover = fileCoverUrl));
          });
      })();
    }

    // Introduction video upload
    if (courseIntro) {
      (async () => {
        const url = await generateUploadURL();
        let fileIntroUrl = url.split("?")[0];

        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": courseIntro.type,
          },
          body: courseIntro,
        })
          .then(() => {
            updateDoc(firestoreRef, {
              course_intro: fileIntroUrl,
            });
          })
          .then(() => {
            console.log("Course Uploaded successfully");
            console.log("course", course);

            setCourse((course.course_intro = fileIntroUrl));

            navigate("/admin/course-edit/" + firestoreRef.id, {
              state: { coursedata: course },
            });
          });
      })();
    }
  };
  return (
    <>
      <div id="addnewcourse">
        <div class="card1">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>New Course</h4>
          </div>

          <div class="cont">
            <label className="course_cover" for="newuppp">
              <img
                src={
                  courseCover
                    ? URL.createObjectURL(courseCover)
                    : "https://cbsnews3.cbsistatic.com/hub/i/r/2015/12/11/7f3c9843-adb1-4022-be13-82515641a9fc/thumbnail/1200x630/5af2e16fd2ecd02f06637db5ca110a43/open-book.jpg"
                }
                alt="Avatar "
                className=" w-100"
                id="coverImg"
                // style={{
                //   width: "100%",
                //   objectFit: "contain",
                //   margin: "1rem",
                // }}
              />

              <h3
                style={{
                  color:" white",
                  background: "blue",
                  padding: "5px",
                  borderRadius: "0.5rem",
                  width: "15%",
                  margin: "1rem",
                  textAlign: "center"
                }}
              >
                {courseCover ? "Change Cover" : "Upload Cover"}
              </h3>
            </label>
          </div>

          <input
            type="file"
            name="fileupload"
            style={{ display: "none" }}
            id="newuppp"
            onChange={(e) => setCourseCover(e.target.files[0])}
          />
          <div class="cardfirst">
            {/* <!--style="display: flex; justify-content: space-between;" --> */}
            <div
              className="thumb"
              style={{
                textAlign: "relative",
              }}
            >
              <label className="course_logo" for="courselogofile">
                <img
                  src={
                    courseLogo
                      ? URL.createObjectURL(courseLogo)
                      : "https://cbsnews3.cbsistatic.com/hub/i/r/2015/12/11/7f3c9843-adb1-4022-be13-82515641a9fc/thumbnail/1200x630/5af2e16fd2ecd02f06637db5ca110a43/open-book.jpg"
                  }
                  alt="upload your"
                  className="thmimg "
                  id="thumbImg"
                />
                <br />
                <br />
                <h3
                  style={{
                    color: "white",
                    background: "blue",
                    padding: "5px 10px",
                    borderRadius: "0.5rem",
                    width: "100%",
                    margin: "0.5rem",
                    textAlign: "center"
                  }}
                >
                  {courseLogo ? "Change Logo" : "Upload Logo"}
                </h3>
              </label>
            </div>
            <input
              type="file"
              name="fileupload1"
              style={{ display: "none" }}
              id="courselogofile"
              onChange={(e) => setCourseLogo(e.target.files[0])}
            />

            {/* <!-- form start --> */}

            <h3 class="ci">Course Information</h3>
            <div class="box">
              <div class="title">
                <div class="tit" style={{ width: "20rem" }}>
                  <h3>Title</h3>
                  <input
                    type="text"
                    onChange={(e) => setCourseName(e.target.value)}
                    name="t_name"
                    class="form-control titi"
                    placeholder="Course Title"
                  />
                </div>
                <div class="cons">
                  <h3
                    style={{
                      marginTop: ".5rem",
                      marginLeft: "2rem",
                      textAlign: "start",
                    }}
                  >
                    Price
                  </h3>
                  <input
                    type="text"
                    name="concept"
                    onChange={(e) => setCourseCost(e.target.value)}
                    class="form-control cours"
                    style={{ width: "150%", marginLeft: "2rem" }}
                    placeholder="Enter Price"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="facu">
            <div>
              <h3>Faculties Handling this course</h3>
              <div class="d-flex">
                <div class="multiselect">
                  <div class="selectBox" onclick="showCheckboxes(this)">
                    <select
                      name="faculty"
                      id="faculty"
                      className="faculty"
                      onChange={(opt) => setCourseFaculty(opt.target.value)}
                    >
                      <option>Select Faculty</option>
                      {faculties.length > 0 &&
                        faculties?.map((faculty, idx) => (
                          <>
                            <option key={idx} value={faculty?.name}>
                              {faculty?.name}
                            </option>
                          </>
                        ))}
                    </select>
                    <div class="overSelect" id="overSelect"></div>
                  </div>
                  <div id="checkboxesFac" class="labelsContOfmulsel"></div>
                </div>
              </div>
            </div>
            <div class="langu">
              <h3>Language</h3>
              <div class="d-flex">
                <select
                  name="language"
                  id="language"
                  style={{ width: "200px" }}
                  className="lau"
                  onChange={(opt) => setCourseLanguage(opt.target.value)}
                >
                  <option>Select Languages</option>
                  <option value="Tamil">Tamil</option>
                  <option value="English">English</option>
                </select>

                <i
                  class="fas fa-plus-square labtn"
                  style={{ display: "none" }}
                ></i>
              </div>
            </div>
          </div>

          <div class="descri" >
            <h3>Description</h3>
            <div class="form-group focused ">
              <textarea
                rows="4"
                class="form-control form-control-alternative"
                name="crsDesc"
                onChange={(e) => setCourseDescription(e.target.value)}
                placeholder="A few words about this course ..."
              ></textarea>
            </div>

            <div>
              {/* <!-- style="margin-top: 25px;" --> */}
              <h3>Introduction Video &nbsp; </h3>
              <label
                className="course_intro"
                for="courseIntro"
                style={{
                  margin: "1rem",
                  borderRadius: "0.5rem",
                  
                }}
              >
                <h3
                  style={{
                    marginBottom: "15px",
                    color: "white",
                    background: "blue",
                    padding: "5px 10px",
                    borderRadius: "0.5rem",
                    // width: "100%",
                    fontSize: "14px",
                    margin: "0.5rem",
                  }}
                >
                  {courseIntro
                    ? "Change Introduction Video"
                    : "Upload Introduction Video"}
                </h3>
                {/* <video
                  src={courseIntro ? URL.createObjectURL(courseIntro) : null}
                  style={
                    {
                      // width: "600px",
                      // height: "300px"
                    }
                  }
                ></video> */}
              </label>
              <input
                type="file"
                class="inpuu"
                id="courseIntro"
                style={{ display: "none" }}
                name="crsIntr"
                onChange={(e) => setCourseIntro(e.target.files[0])}
              />
            </div>

            <div class="cousr">
              <div>
                <h3>Course Mode</h3>
                <div class="d-flex">
                  <select
                    class="form-control cours"
                    name="crsType"
                    onChange={(opt) => setCourseMode(opt.target.value)}
                  >
                    <option value="0">Select</option>
                    <option value="Online">Online</option>
                    <option value="Live">Live</option>
                    <option value="One to One">One to One</option>
                  </select>
                  <i
                    class="fas fa-plus-square plbtn"
                    style={{ display: "none" }}
                  ></i>
                </div>
              </div>

              {/* <div class="ccat">
                  <h3 class="cnal">Course Nationality</h3>
                  <div class="d-flex clsa">
                    <select class="form-control cours11" name="crsNationality">
                      <option value="default" selected>
                        ---select---
                      </option>
                      <option value="National">National</option>
                      <option value="International">International</option>
                    </select>
                    <i
                      class="fas fa-plus-square plbtn"
                      style={{ display: "none" }}
                    ></i>
                  </div>
                </div> */}
            </div>

            <div class="cousr111">
              <div>
                <h3>Course Category</h3>
                <div class="d-flex">
                  <select
                    class="form-control cours11"
                    name="maincat"
                    onChange={(opt) => {
                      setCourseCategory(opt.target.value);
                      console.log("selected category", opt.target.value);
                    }}
                  >
                    <option value="0">Select</option>
                    {category.length > 0 &&
                      category?.map((category, idx) => (
                        <>
                          <option key={idx} value={category?.categoryId}>
                            {category?.categoryName}
                          </option>
                        </>
                      ))}
                    {/* <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                    <option value="5">Honda</option> */}
                  </select>
                  <i
                    class="fas fa-plus-square plbtn"
                    onclick="ccatonclick()"
                    style={{ display: "none" }}
                  ></i>
                </div>
              </div>
              <CategoryModal value={{ category, setCategory }} />
              {/* <div class="ccat11">
                  <h3 class="newhh">Course Subcategory</h3>
                  <div class="d-flex">
                    <div>
                      <select class="form-control coursddd" name="subcat">
                        <option value="0">Select</option>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>
                        <option value="3">Citroen</option>
                        <option value="4">Ford</option>
                        <option value="5">Honda</option>
                      </select>
                    </div>
                    <div>
                      <i
                        class="fas fa-plus-square plbtn11"
                        onclick="helloworldclick()"
                        style={{ display: "none" }}
                      ></i>
                    </div>
                  </div>
                </div> */}
            </div>

            <div style={{ marginTop: "1rem" }} id="selb11">
              <h3>Is there any Assessment in this course ?</h3>
              <div style={{ width: "10%" }}>
                <select
                  class="form-control typeclass"
                  id="selb1"
                  onchange="mtf('selb1','multiplechoice','trueorfalse')"
                  name="selb1"
                  onChange={(opt) => setCourseAssessment(opt.target.value)}
                >
                  <option value="0">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <hr />
            <br />
            <div style={{ textAlign: "right" }}>
              <button
                type="button"
                class="btn btn-sm btn-primary"
                id="createCourse"
                onClick={handleCreateCourse}
              >
                Create Course
              </button>
              <a href="#courses">
                <button
                  type="button"
                  class="btn btn-sm btn-primary"
                  style={{ backgroundColor: "#dc3545" }}
                  onclick="creationcancelbtn()"
                >
                  Cancel
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- COURSE CATEGORY POPUP --> */}
        <div id="facidssss" style={{ display: "none" }}></div>

        <div>
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#mainCatCmodal"
            style={{ display: "none" }}
            id="categorypopup"
          >
            Launch demo modal
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="mainCatCmodal"
            tabindex="-1"
            aria-labelledby="mainCatCmodalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="mainCatCmodalLabel">
                    Course Category
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body">
                  <div class="d-flex" style={{ justifyContent: "center" }}>
                    <table style={{ textAlign: "center" }}>
                      <div>
                        <tr>
                          <td>Main Category :</td>
                          <td>
                            <input
                              type="text"
                              name="newmaincat"
                              class="form-control"
                              placeholder="Main Category"
                            />
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr>
                          <td>Sub Category :</td>
                          <td>
                            <input
                              type="text"
                              name="newsubcat"
                              class="form-control"
                              placeholder="Sub Category"
                            />
                          </td>
                        </tr>
                      </div>
                    </table>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-sm btn-primary"
                    style={{
                      backgroundColor: "red",
                      marginRight: "-1rem",
                      marginTop: ".2rem",
                    }}
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-primary"
                    style={{ marginLeft: "2rem", marginTop: ".1rem" }}
                    data-dismiss="modal"
                    onclick="setNewCategory()"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- COURSE CATEGORY POPUP --> */}

        {/* <!-- COURSE SUBCATEGORY POPUP --> */}

        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#subCatCmodal"
          style={{ display: "none" }}
          id="helloworldd"
        >
          Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="subCatCmodal"
          tabindex="-1"
          aria-labelledby="subCatCmodalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="subCatCmodalLabel">
                  Course Sub Category
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="d-flex" style={{ justifyContent: "center" }}>
                  <table style={{ textAlign: "center" }}>
                    <div></div>
                    <div>
                      <tr>
                        <td>Sub Category :</td>
                        <td>
                          <input
                            type="text"
                            name="newsolosubcat"
                            class="form-control"
                            placeholder="Sub Category"
                          />
                        </td>
                      </tr>
                    </div>
                  </table>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-sm btn-primary"
                    style={{
                      backgroundColor: "red",
                      marginRight: "-1rem",
                      marginTop: ".2rem",
                    }}
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-primary"
                    style={{ marginLeft: "2rem", marginTop: ".1rem" }}
                    data-dismiss="modal"
                    onclick="newsolosubcatset()"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAddNewCourse;
