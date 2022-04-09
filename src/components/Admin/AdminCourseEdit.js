import { useState, useEffect, useContext, useRef } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
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
  getDownloadURL,
} from "../../services/firebase";
import { generateUploadURL } from "../../services/awsS3";
import ListItems from "./courseEditComponents/ListItems";
import CardItem from "./courseEditComponents/CardItem";
import SectionItems from "./courseEditComponents/SectionItems";
import SectionGroup from "./dynamicSections/SectionGroup";
import { SectionContext } from "../../contex/SectionContext";

const AdminCourseEdit = () => {
  const { sections, setSections, category } = useContext(SectionContext);
  const [objectives, setObjectives] = useState([]);
  const [intialObjectives, setIntialObjectives] = useState([]);
  const [prerequisites, setPrerequisites] = useState([]);
  const [intialPrerequisites, setIntialPrerequisites] = useState([]);

  const [course, setCourse] = useState(null);
  const [coursecover, setCoursecover] = useState(null);
  const [courselogo, setCourselogo] = useState(null);
  const courseLogoRef = useRef(null);
  const [coursetitle, setCoursetitle] = useState(null);
  const [courseprice, setCourseprice] = useState(null);
  const [courseAuthor, setCourseAuthor] = useState(null);
  const [coursedescription, setCoursedescription] = useState(null);

  const { courseId } = useParams();
  const coursedata = useLocation();
  const handleLogoClick = (event) => {
    courseLogoRef.current.click();
  };
  useEffect(() => {
    let domain = "asdf.domain.com";
    getDoc(
      doc(
        db,
        "secondary",
        domain,
        "category",
        "EQNjtqX1z3zo2Erpo3Jn",
        "course",
        "XstHiQgxcT65aPjf8aTX"
      )
    ).then((d) => {
      console.log("Objectives>>>", d.data().objectives);
      setCourse(d.data());
      setIntialObjectives(d.data().objectives);
      setIntialPrerequisites(d.data().prerequisites);
      setSections(d.data().sections);
    });
  }, []);
  // /secondary/asdf.domain.com/category/EQNjtqX1z3zo2Erpo3Jn/course/O5HEjHhfznaHd78Itx94

  const saveButtonPressed = async () => {
    var firestoreRef = doc(
      db,
      "secondary",
      "asdf.domain.com",
      "category",
      "EQNjtqX1z3zo2Erpo3Jn",
      "course",
      "XstHiQgxcT65aPjf8aTX"
    );
    if (coursetitle != null) {
      updateDoc(firestoreRef, {
        courseName: coursetitle,
      }).then(() => {
        // console.log("Course Title Uploaded", coursetitle);
      });
    }
    if (courseAuthor != null) {
      updateDoc(firestoreRef, {
        courseAuthor,
      }).then(() => {
        // console.log("Course Concept Uploaded", courseAuthor);
      });
    }
    if (courseprice != null) {
      updateDoc(firestoreRef, {
        cost: courseprice,
      }).then(() => {
        // console.log("Course Price Uploaded", courseprice);
      });
    }
    if (coursedescription != null) {
      updateDoc(firestoreRef, {
        description: coursedescription,
      }).then(() => {
        // console.log("Course Description Uploaded", coursedescription);
      });
    }
    if (prerequisites.length > 0) {
      updateDoc(firestoreRef, {
        prerequisites: prerequisites,
      }).then(() => {
        // console.log("Prerequisites Uploaded", prerequisites);
      });
    }
    if (objectives.length > 0) {
      updateDoc(firestoreRef, {
        objectives: objectives,
      }).then(() => {
        // console.log("Objectives Uploaded", objectives);
      });
    }
    if (courselogo != null) {
      const courseLogoUpload = async () => {
        const url = await generateUploadURL();

        var fileUrl = url.split("?")[0];

        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": courselogo.type,
          },
          body: courselogo,
        }).then(() => {
          updateDoc(firestoreRef, {
            courseLogo: fileUrl,
          }).then(() => {
            // console.log("Course logo Uploaded", fileUrl);
          });
        });
      };
      courseLogoUpload();
    }
    if (coursecover != null) {
      const courseCoverUpload = async () => {
        const url = await generateUploadURL();

        var fileUrl = url.split("?")[0];

        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": coursecover.type,
          },
          body: coursecover,
        }).then(() => {
          updateDoc(firestoreRef, {
            courseCover: fileUrl,
          }).then(() => {
            // console.log("Course cover Uploaded", fileUrl);
          });
        });
      };
      courseCoverUpload();
    }

    if (sections.length > 0) {
      updateDoc(firestoreRef, {
        sections,
      }).then(() => {
        console.log("sections Uploaded", sections);
      });
    }
  };

  console.log("objective", objectives);
  console.log("prerequisites", prerequisites);
  console.log("sections", sections);
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-ecommerce">
          {/* <!-- EDIT COURSE --> */}
          <div id="editcourse">
            <div className="card1">
              {/* <!-- <i className="fas fa-arrow-left" style="font-size: 1.2rem; margin-bottom: 1rem; cursor: pointer;"></i> --> */}
              <div
                style={{ display: "flex", justifyContent: "space-between " }}
              >
                <h3 className="">Course Information</h3>
              </div>

              <div className="cont text-center">
                <label className="course_cover" for="cvrimgupload1">
                  <img
                    src={
                      coursecover
                        ? URL.createObjectURL(coursecover)
                        : course && course?.courseCover
                    }
                    alt="Avatar "
                    className="image"
                    id="coursecover1"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                      margin: "1rem",
                    }}
                  />

                  <h3
                    style={{
                      color: "white",
                      background: "blue",
                      padding: "10px",
                      borderRadius: "0.5rem",
                      width: "100%",
                      margin: "1rem",
                    }}
                  >
                    {coursecover ? "Change Cover" : "Upload Cover"}
                  </h3>
                </label>

                <input
                  type="file"
                  name="fileupload"
                  style={{ display: "none" }}
                  id="cvrimgupload1"
                  accept="image/*"
                  onChange={(e) => setCoursecover(e.target.files[0])}
                />
              </div>

              <div className="">
                {/* <!-- form start --> */}

                <div className="row">
                  <div className="col-md-4">
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        src={
                          courselogo
                            ? URL.createObjectURL(courselogo)
                            : course && course?.courseLogo
                        }
                        alt="upload your"
                        class="rounded-circle p-2 img-fluid"
                      />

                      <div class="card-body">
                        <div className="d-flex justify-content-center">
                          <button
                            class="btn btn-outline-primary"
                            onClick={handleLogoClick}
                          >
                            {courselogo ? "Change Logo" : "Upload Logo"}
                          </button>

                          <input
                            type="file"
                            name="fileupload1"
                            id="courseLogo1"
                            accept="image/*"
                            style={{ display: "none" }}
                            ref={courseLogoRef}
                            onChange={(e) => setCourselogo(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-6">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Title</label>
                          <input
                            type="text"
                            name="t_name"
                            id="courseTitle"
                            className="form-control"
                            placeholder="Course Title"
                            value={
                              coursetitle
                                ? coursetitle
                                : course && course?.courseName
                            }
                            onChange={(e) => setCoursetitle(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Price</label>
                          <input
                            type="text"
                            name="price"
                            className="form-control"
                            id="coursePrice"
                            placeholder="Course price"
                            value={
                              courseprice ? courseprice : course && course?.cost
                            }
                            onChange={(e) => setCourseprice(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Course Author</label>
                          <input
                            type="text"
                            id="courseAuthor"
                            name="author"
                            className="form-control"
                            placeholder="Course Author"
                            value={
                              courseAuthor
                                ? courseAuthor
                                : course && course?.courseAuthor
                            }
                            onChange={(e) => setCourseAuthor(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">
                            Description
                          </label>
                          <textarea
                            id="courseDescription"
                            rows="4 "
                            className="form-control form-control-alternative "
                            name="crsDesc "
                            placeholder="A few words about this course ... "
                            value={
                              coursedescription
                                ? coursedescription
                                : course && course?.description
                            }
                            onChange={(e) =>
                              setCoursedescription(e.target.value)
                            }
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CardItem
              values={setObjectives}
              heading="Objectives"
              intialValues={intialObjectives}
            />
            <CardItem
              values={setPrerequisites}
              heading="Prerequisites"
              intialValues={intialPrerequisites}
            />
            <div>
              <h2 className="mb-5 pl-3">ADD COURSE VIDEOS</h2>
              <div class="accordion" id="accordionExample">
                <div>
                  <SectionGroup />
                </div>

                <div
                  style={{
                    display: "flex",
                    width: "20%",
                    margin: "auto",
                    marginBottom: "30px",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-md btn-primary px-5"
                    id="createCourse"
                    onClick={saveButtonPressed}
                  >
                    SAVE
                  </button>
                  <a href="/">
                    <button
                      type="button"
                      className="btn btn-md btn-danger ml-5 px-5"
                      // style={{ backgroundColor: "#dc3545" }}
                      onclick="cancelSave() "
                    >
                      Cancel
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCourseEdit;
