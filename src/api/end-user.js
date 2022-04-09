import { collection, doc, getDoc, getDocs } from "../services/firebase";

const getUserDetails = (db, studentId, domain, docRef, setData) => {
    getDoc(docRef)
        .then((document) => {
            let data = document.data();

            if (data === undefined) {
                // alert("Access Deined, Please buy the package to use further!!!");
                setData(0);
            } else {
                let list = [];
                let courses = [];
                let bookmarks = [];
                let orders = [];
                let completed_courses = [];
                let finalCourseDetails = [];
                let finalBookmarkDetails = [];
                let finalCompletedCourseDetails = [];
                let finalOrderDetails = [];
                getDocs(collection(db, "students", studentId, "user_course_details"))
                    .then((docs) => {
                        // console.log("endd ", docs);
                        docs.forEach((docu) => {
                            list.push(docu.data());
                        });
                        console.log("list:  ", list);
                    })
                    .then(() => {
                        let detail = list[0].courses;
                        console.log("courses", detail);
                        let detail2 = list[0].bookmarks;
                        console.log("bookmarks", detail2);

                        let detail3 = list[0].completed_courses;
                        console.log("completed_courses", detail3);
                        let detail4 = list[0].orders;
                        console.log("orders", detail4);

                        detail.forEach((ref) => {
                            // console.log("courseRef", ref);
                            courses.push(ref.course_ref);
                        });
                        console.log("courseRefList", courses)
                        detail2.forEach((ref) => {
                            bookmarks.push(ref.course_ref);
                        });
                        detail3.forEach((ref) => {
                            completed_courses.push(ref.course_ref);
                        });
                        detail4.forEach((ref) => {
                            orders.push(ref.course_ref);
                        });
                        courses.forEach((ref) => {
                            // console.log("courseRef", ref);
                            const courseRef = doc(db, ref);
                            getDoc(courseRef).then((courseData) => {
                                finalCourseDetails.push(courseData.data());
                                console.log("courseRefList", courseData.data())
                            });
                        });
                        bookmarks.forEach((ref) => {
                            const courseRef = doc(db, ref);
                            getDoc(courseRef).then((courseData) => {
                                finalBookmarkDetails.push(courseData.data());
                            });
                        });
                        completed_courses.forEach((ref) => {
                            const courseRef = doc(db, ref);
                            getDoc(courseRef).then((courseData) => {
                                finalCompletedCourseDetails.push(courseData.data());
                            });
                        });
                        // orders.forEach((ref) => {
                        //     const courseRef = doc(db, ref);
                        //     getDoc(courseRef).then((courseData) => {
                        //         finalOrderDetails.push(courseData.data());
                        //     });
                        // });
                        finalOrderDetails = detail4;

                        let finalUserDetails = {
                            courses: finalCourseDetails,
                            bookmarks: finalBookmarkDetails,
                            completed_courses: finalCompletedCourseDetails,
                            orders: finalOrderDetails
                        };

                        console.log("userData outside", finalUserDetails);

                        sessionStorage.setItem(
                            "userCourses",

                            JSON.stringify(finalUserDetails)
                        );
                        setData(finalUserDetails);
                    })
                    .catch((e) => console.log(e));
            }
        })
        .catch((error) => {
            console.log(error);
        });
};
export { getUserDetails };
