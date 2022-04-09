import { useState, useEffect, useRef } from "react";

const TopicItem = (props) => {
    const [url, setUrl] = useState([]);
    const { materialsUrl, topicName, topicVideoUrl, topicDesc } = props.data;
    const { isWatched } = props;
    const [watchComplete, setWatchcomplete] = useState({
        videostate: false,
        url: ""
    });

    // const handleWatchComplete = (played, url) => {
    //   // console.log("current state", played, url);
    //   if (played >= 0.7 && !watchComplete.videostate) {
    //     setWatchcomplete({
    //       videostate: true,
    //       url: url
    //     });
    //     // console.log("");
    //   }
    // };
    useEffect(() => {
        // console.log("data", props.data);
        // console.log("Title", Title);
        // console.log("iswatched", isWatched);
        if (topicVideoUrl in props.isWatched) {
            setWatchcomplete({
                videostate: true,
                url: topicVideoUrl
            });
        }
    }, [isWatched]);

    return (<>
        <div style={{ display: "inline" }} >
            <div className="row" style={{display: "flex", justifyContent: "space-Between", alignItems: "center"}}>
            
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={
                    watchComplete.videostate === true && topicVideoUrl === watchComplete.url
                        ? "green"
                        : "grey"
                } class="bi bi-check-circle" viewBox="0 0 20 20">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
            
            
                <button
                    className={
                        watchComplete.videostate === true && topicVideoUrl === watchComplete.url
                            ? "btn btn-block btn-outline-dark"
                            : "btn btn-block btn-outline-dark"
                    }
                    onClick={() => {
                        props.handleUrlChange(`${topicVideoUrl}`);
                        props.handleSummaryChange(`${topicDesc}`);
                        props.handleMaterialChange(`${materialsUrl}`)
                        // setTopicSummary(`${Summary}`);
                    }}
                >

                    {topicName}

                </button>
            
            </div>  
        </div>
    </>
    );
};

export default TopicItem;
