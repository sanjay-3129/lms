import "video-react/dist/video-react.css";
import TopicItem from "./courseContentComponents/TopicItem";

import VideoPlayer from "./courseContentComponents/VideoPlayer";
import { useState, useEffect, useRef } from "react";
import {
    db,
    doc,
    getDoc,
    collection,
    updateDoc
} from "../../services/firebase";

const CourseContent = (props) => {
    // const { courseId } = useParams();
    const courseId = "9Wrck4qQVAi0IHyXQ9rA";
    const [url, setUrl] = useState("");
    const [materials, setMaterials] = useState("");
    const domain = "test";

    const [topicSummary, setTopicSummary] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [courseSections, setCourseSections] = useState([]);
    const [courseContent, setCourseContent] = useState([]);
    const [courseConclusion, setCourseConclusion] = useState([]);
    const [watchedMap, setWatchedMap] = useState({});
    const studentCourseRef = doc(
        db,
        "students",
        "cl9ynT5FlnC6GcYbB64x",
        "user_course_details",
        "vfgzg.csb.app"
    );
    // /students/cl9ynT5FlnC6GcYbB64x/user_course_details/asdf.domain.com
    const handleVideoPlayer = async (videoItem) => {
        if (!(videoItem in watchedMap)) {
            const temp = { ...watchedMap, ...videoItem };
            await setWatchedMap(temp);
            await updateDoc(studentCourseRef, { watched: temp }, { merge: true })
                .then
                // console.log("Url Added successfully")
                ();
            // console.log("FromVideoPlayer", temp);
        }
    };

    // doc(db, docRef);
    // /students/s6sdkkradZfzX1AMNYhuYSxS1HI2/user_course_details/vfgzg.csb.app
    // /secondary/asdf.domain.com/category/EQNjtqX1z3zo2Erpo3Jn/course/XstHiQgxcT65aPjf8aTX
    const courseRef = doc(db, "secondary", "asdf.domain.com", "category", "EQNjtqX1z3zo2Erpo3Jn", "course", "XstHiQgxcT65aPjf8aTX");

    useEffect(() => {
        getDoc(studentCourseRef).then((studentcourseData) => {
            console.log("from studentcourseData ", studentcourseData.data().watched);
            setWatchedMap(studentcourseData.data()?.watched);
        });

        getDoc(courseRef).then((courseData) => {
            // courseData.data();
            // console.log("from content ", courseData.data());
            setUrl(courseData.data().courseIntro);
            // setCourseSection(courseData.data());
            setCourseData(courseData.data());
            setCourseSections(courseData.data().sections);
            // setCourseContent(courseData.data().sessions.courseContent);
            // setCourseConclusion(courseData.data().sessions.courseConclusion);
            // setConclusion(courseData.data().sections.gettingStarted);
        });
    }, []);
    // const [userDetails, setUserDetails] = useOutletContext([]);
    // const [mycourse, setMycourse] = useState(null);
    // useEffect(() => {
    //   setMycourse(userDetails);
    // }, [mycourse]);
    // console.log("user courses from course Content ", userDetails.courses);
    const handleUrlChange = (url) => {
        setUrl(url);
    };
    const handleSummaryChange = (summary) => {
        setTopicSummary(summary);
    };
    const handleMaterialChange = (materialArray) => {
        setMaterials(materialArray)
    }
    return (
        <>
            <div class="row">
                <div className="col-lg-8 mt-5">
                    <VideoPlayer
                        url={url}
                        // onProgress={handleWatchComplete}
                        handleVideoPlayer={handleVideoPlayer}
                    />
                </div>
                <div class="col-lg-4">

                    <div class="accordion mt-5" id="accordionExample">
                        {courseSections.map((section) => {

                            return (<div class="card">
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button
                                            class="btn btn-block text-left collapsed text-center"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            {section.sectionName}
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapseOne"
                                    class="collapse"
                                    aria-labelledby="headingone"
                                    data-parent="#accordionExample"
                                >
                                    <div class="card-body">


                                        <p></p>
                                        {section.topics.map((topic) => {
                                            // console.log(watchComplete.videostate, watchComplete.url);
                                            console.log("my1", courseSections)
                                            // console.log("test", topic.url);
                                            return (
                                                <TopicItem
                                                    key={topic.topicVideoUrl}
                                                    data={topic}
                                                    handleUrlChange={(url) => handleUrlChange(url)}
                                                    handleSummaryChange={(summary) =>
                                                        handleSummaryChange(summary)
                                                    }
                                                    handleMaterialChange={(materialArray) => handleMaterialChange(materialArray)}
                                                    isWatched={watchedMap}
                                                />
                                            );
                                        })
                                        }
                                    </div>
                                </div>
                            </div>)
                            {/* <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button
                                        class="btn btn-block text-left collapsed text-center"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Course Content
                                    </button>
                                </h2>
                            </div>
                            <div
                                id="collapseTwo"
                                class="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordionExample"
                            >
                                <div class="card-body">
                                    {courseContent.map((topic) => {
                                        return (
                                            <TopicItem
                                                key={topic.url}
                                                data={topic}
                                                handleUrlChange={(url) => handleUrlChange(url)}
                                                handleSummaryChange={(summary) =>
                                                    handleSummaryChange(summary)
                                                }
                                                isWatched={watchedMap}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div> */}
                            {/* <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button
                                        class="btn btn-block text-left collapsed text-center"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Conclusion
                                    </button>
                                </h2>
                            </div>
                            <div
                                id="collapseThree"
                                class="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordionExample"
                            >
                                <div class="card-body">
                                    {courseConclusion.map((topic) => {
                                        return (
                                            <TopicItem
                                                key={topic.url}
                                                data={topic}
                                                handleUrlChange={(url) => handleUrlChange(url)}
                                                handleSummaryChange={(summary) =>
                                                    handleSummaryChange(summary)
                                                }
                                                isWatched={watchedMap}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div> */}
                        })
                        }</div>
                </div>
            </div>
            <div class="row">
                <div className="col-lg-8 mt-5">
                    {/*
        <!-- Tabs navs --> */}
                    <ul class="nav nav-pills font-weight-bold" role="tablist">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                data-toggle="tab"
                                href="#tabs-1"
                                role="tab"
                            >
                                Overview
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                Summary
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                Material
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div class="tab-content">
                        <div class="tab-pane active" id="tabs-1" role="tabpanel">
                            <dl class="row">
                                <dt class="col-sm-3 text-left ">Course Name</dt>
                                <dd class="col-sm-9 text-left text-capitalize">
                                    {courseData.courseName}
                                </dd>
                                <hr />
                                <dt class="col-sm-3 text-left">Description</dt>
                                <dd class="col-sm-9 text-left text-capitalize">
                                    {courseData.description}
                                </dd>
                                <hr />
                                <dt class="col-sm-3 text-left">Author</dt>
                                <dd class="col-sm-9 text-left text-capitalize">
                                    {courseData?.courseAuthor}
                                </dd>
                                <hr />
                                {/* <dt class="col-sm-3 text-left">Objectives</dt>

                                {courseData?.objectives.map((obj) => {
                                    return (<>
                                        <dt class="col-sm-3 text-left"></dt>
                                        <dd class="col-sm-9 text-left text-capitalize">
                                            {obj}
                                        </dd>
                                    </>)
                                })} */}

                            </dl>
                        </div>
                        <div class="tab-pane" id="tabs-2" role="tabpanel">
                            <p>{topicSummary}</p>
                        </div>
                        <div class="tab-pane" id="tabs-3" role="tabpanel">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Filename </th>
                                        <th scope="col">Download</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* {materials.split(',').map((material) => {
                                        // const { Material, Summary, Title, Url } = topic;
                                        // console.log("test", topic.url);
                                        return (
                                            <tr>
                                                <th scope="row"></th>
                                                <td>Supporting Materials</td>
                                                <td>
                                                    <a href={material} target="_blank">
                                                        <button
                                                            type="button"
                                                            class="btn btn-primary  btn-sm"
                                                        >
                                                            Download
                                                        </button>
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })} */}
                                    {materials && materials.split(",").map((url) => {

                                        return (
                                            <tr>
                                                <th scope="row"></th>
                                                <td>files</td>
                                                <td>
                                                    {" "}
                                                    <a href={url} target="_blank">
                                                        <button
                                                            type="button"
                                                            class="btn btn-primary   btn-sm"
                                                        >
                                                            Download
                                                        </button>
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    {/* {typeof materials.split(',')} */}
                                    {/* {courseContent.map((topic) => { 
                                        const { Material, Summary, Title, Url } = topic;
                                        // console.log("test", topic.url);
                                        return (
                                            <tr>
                                                <th scope="row"></th>
                                                <td>{Title}</td>
                                                <td>
                                                    {" "}
                                                    <a href={Material} target="_blank">
                                                        <button
                                                            type="button"
                                                            class="btn btn-primary   btn-sm"
                                                        >
                                                            Download
                                                        </button>
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    {courseConclusion.map((topic) => {
                                        const { Material, Summary, Title, Url } = topic;
                                        // console.log("test", topic.url);
                                        return (
                                            <tr>
                                                <th scope="row"></th>
                                                <td>{Title}</td>
                                                <td>
                                                    {" "}
                                                    <a href={Material} target="_blank">
                                                        <button
                                                            type="button"
                                                            class="btn btn-primary  btn-sm"
                                                        >
                                                            Download
                                                        </button>
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseContent;
