import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  storage,
  ref,
  db,
  doc,
  uploadBytes,
  updateDoc,
  getDownloadURL,
  getDoc,
} from "../../services/firebase";
import "./AdminContent.css";

const AdminContent = () => {
  const logo = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  const [details, setDetails] = useState({});
  const [logo1, setLogo1] = useState(null);
  const [about1, setAbout1] = useState(null);
  const [contact1, setContact1] = useState(null);
  const [carouselImage1, setcarouselImage1] = useState(null);
  const [carouselImage2, setcarouselImage2] = useState(null);
  const [carouselImage3, setcarouselImage3] = useState(null);

  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [email, setEmail] = useState("");
  const [aboutus, setAboutus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // console.log('Content>>>', details);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const domain = "asdf.domain.com";
    var firestoreRef = await doc(db, "secondary", domain);
    var document = await getDoc(firestoreRef);
    // console.log('firebase', document?.data()?.content);
    setDetails(document?.data()?.content);
  };
  const saveButtonPressed = async () => {
    setIsLoading(true);
    const domain = "asdf.domain.com";
    var firestoreRef = doc(db, "secondary", domain);
    if (logo1) {
      const logoRef = ref(storage, `Homepage/Logo`);
      const uploadImg = await uploadBytes(logoRef, logo1);
      const url = await getDownloadURL(logoRef);
      await updateDoc(firestoreRef, {
        "content.logo": url,
      }).then(() => {
        // console.log('Logo Url', url);
      });
      await fetch();
    }
    if (about1) {
      const aboutRef = ref(storage, `Homepage/About`);
      uploadBytes(aboutRef, about1).then((snapshot) => {
        getDownloadURL(aboutRef).then((aboutUrl) => {
          updateDoc(firestoreRef, {
            "content.custom_image": aboutUrl,
          }).then(() => {
            console.log("About Url", aboutUrl);
          });
        });
      });
      await fetch();
    }
    if (contact1) {
      const contactRef = ref(storage, `Homepage/Contact`);
      uploadBytes(contactRef, contact1).then((snapshot) => {
        getDownloadURL(contactRef).then((contactUrl) => {
          updateDoc(firestoreRef, {
            "content.contact_image": contactUrl,
          }).then(() => {
            console.log("Contact Url", contactUrl);
          });
        });
      });
      await fetch();
    }
    if (carouselImage1) {
      const carouselRef = ref(storage, `Homepage/carouselImages`);
      uploadBytes(carouselRef, carouselImage1).then((snapshot) => {
        getDownloadURL(carouselRef).then((carouselURL) => {
          updateDoc(firestoreRef, {
            "content.carousel_image_1": carouselURL,
          }).then(() => {
            console.log("carousel image 1 Url", carouselURL);
          });
        });
      });
      await fetch();
    }
    if (carouselImage2) {
      const carouselRef2 = ref(storage, `Homepage/carouselImages2`);
      uploadBytes(carouselRef2, carouselImage2).then((snapshot) => {
        getDownloadURL(carouselRef2).then((carouselURL) => {
          updateDoc(firestoreRef, {
            "content.carousel_image_2": carouselURL,
          }).then(() => {
            console.log("carousel image 2 Url", carouselURL);
          });
        });
      });
      await fetch();
    }
    if (carouselImage3) {
      const carouselRef3 = ref(storage, `Homepage/carouselImages3`);
      uploadBytes(carouselRef3, carouselImage3).then((snapshot) => {
        getDownloadURL(carouselRef3).then((carouselURL) => {
          updateDoc(firestoreRef, {
            "content.carousel_image_3": carouselURL,
          }).then(() => {
            console.log("carousel image 3 Url", carouselURL);
          });
        });
      });
      await fetch();
    }
    if (content1) {
      updateDoc(firestoreRef, {
        "content.content1": content1,
      }).then(() => {
        console.log("Content1 Uploaded", content1);
        fetch();
      });
    }
    if (content2) {
      updateDoc(firestoreRef, {
        "content.content2": content2,
      }).then(() => {
        console.log("Content2 Uploaded", content2);
        fetch();
      });
    }
    if (content3) {
      updateDoc(firestoreRef, {
        "content.content3": content3,
      }).then(() => {
        console.log("Content3 Uploaded", content3);
        fetch();
      });
    }
    if (email) {
      updateDoc(firestoreRef, {
        "content.email": email,
      }).then(() => {
        console.log("email Uploaded", email);
        fetch();
      });
    }
    if (aboutus) {
      updateDoc(firestoreRef, {
        "content.about_us": aboutus,
      }).then(() => {
        console.log("Aboutus Uploaded", aboutus);
        fetch();
      });
    }

    setIsLoading(false);
  };
  if (isLoading) {
    return (
      <div className="dashboard-wrapper d-flex justify-content-center align-items-center">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-ecommerce">
          <div className="cardd">
            <h3>Edit Your Website Content Here...</h3>
            <table
              className="table table-bordered"
              style={{ textAlign: "center" }}
            >
              <thead>
                <tr>
                  <th scope="col" className="no1">
                    No.
                  </th>
                  <th scope="col" className="size1">
                    Content Name
                  </th>
                  <th scope="col" className="previewsize">
                    Present
                  </th>
                  <th scope="col">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Logo</td>
                  <td>
                    <img
                      src={details?.logo}
                      id="toBeReplaced"
                      className="imgres"
                      alt="Loding..."
                    />
                  </td>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="one"
                    ref={logo}
                    onChange={(e) => setLogo1(e.target.files[0])}
                  />
                  <td>
                    <i
                      className="fas fa-upload"
                      style={{ cursor: "pointer" }}
                      onClick={() => logo.current.click()}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>About</td>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="two"
                    ref={about}
                    onChange={(e) => setAbout1(e.target.files[0])}
                  />
                  <td>
                    <img
                      src={details?.custom_image}
                      alt="Loding..."
                      className="imgres"
                    />
                  </td>
                  <td>
                    <i
                      className="fas fa-upload"
                      style={{ cursor: "pointer" }}
                      onClick={() => about.current.click()}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Contact image</td>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="three"
                    ref={contact}
                    onChange={(e) => setContact1(e.target.files[0])}
                  />
                  <td>
                    <img
                      src={details?.contact_image}
                      alt="Loding..."
                      className="imgres"
                    />
                  </td>
                  <td>
                    <i
                      className="fas fa-upload"
                      style={{ cursor: "pointer" }}
                      onClick={() => contact.current.click()}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>carousel Image 1</td>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="img1"
                    ref={img1}
                    onChange={(e) => setcarouselImage1(e.target.files[0])}
                  />
                  <td>
                    <img
                      src={details?.carousel_image_1}
                      alt="Loding..."
                      className="imgres"
                    />
                  </td>
                  <td>
                    <i
                      className="fas fa-upload"
                      style={{ cursor: "pointer" }}
                      onClick={() => img1.current.click()}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>carousel Image 2</td>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="img2"
                    ref={img2}
                    onChange={(e) => setcarouselImage2(e.target.files[0])}
                  />
                  <td>
                    <img
                      src={details?.carousel_image_2}
                      alt="Loding..."
                      className="imgres"
                    />
                  </td>
                  <td>
                    <i
                      className="fas fa-upload"
                      style={{ cursor: "pointer" }}
                      onClick={() => img2.current.click()}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>carousel Image 3</td>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="img2"
                    ref={img3}
                    onChange={(e) => setcarouselImage3(e.target.files[0])}
                  />
                  <td>
                    <img
                      src={details?.carousel_image_3}
                      alt="Loding..."
                      className="imgres"
                    />
                  </td>
                  <td>
                    <i
                      className="fas fa-upload"
                      style={{ cursor: "pointer" }}
                      onClick={() => img3.current.click()}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Content - 1</td>
                  <td>{details?.content1 || "Loding..."}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your text here..."
                      value={content1}
                      onChange={(e) => setContent1(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Content - 2</td>
                  <td>{details?.content2 || "Loding..."}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your text here..."
                      value={content2}
                      onChange={(e) => setContent2(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Content - 3</td>
                  <td>{details?.content3 || "Loding..."}</td>
                  <td>
                    <textarea
                      rows="3"
                      cols="40"
                      className="form-control"
                      placeholder="Enter Here..."
                      value={content3}
                      onChange={(e) => setContent3(e.target.value)}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Email</td>
                  <td>{details?.email || "Loding..."}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your text here..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>About content</td>
                  <td>{details?.about_us || "Loding..."}</td>
                  <td>
                    <textarea
                      rows="5"
                      cols="40"
                      className="form-control"
                      placeholder="Enter Here..."
                      value={aboutus}
                      onChange={(e) => setAboutus(e.target.value)}
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="btnstyle">
              <button
                className="btn btn-sm btn-cprimary b1"
                id="saveBtn"
                onClick={saveButtonPressed}
              >
                Save
              </button>{" "}
              &nbsp; &nbsp;
              <button
                className="btn btn-sm btn-cprimary b2"
                style={{ backgroundColor: "red" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminContent;
