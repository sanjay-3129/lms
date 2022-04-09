import "video-react/dist/video-react.css";
import ReactPlayer from "react-player";
import { useState, useEffect, useRef } from "react";
const VideoPlayer = ({ url, onProgress, handleVideoPlayer }) => {
    const [playurl, setplayUrl] = useState([]);
    const videoUrl = useRef(null);
    const [isWatchedVideo, setIsWatchedVideo] = useState(false);
    const [count, setCount] = useState(0);
    const handleWatchComplete = async (played, myurl) => {
        await setIsWatchedVideo(true);
        // console.log("ended", isWatchedVideo, url);
    };
    useEffect(() => {
        if (isWatchedVideo) {
            handleVideoPlayer({ [url]: isWatchedVideo });
            setIsWatchedVideo(false);
        }
    }, [isWatchedVideo, url]);
    return (
        <ReactPlayer
            onPlay={() => {
                setplayUrl(videoUrl.current?.player?.player?.player?.currentSrc);
            }}
            config={{ file: { attributes: { controlsList: "nodownload" } } }}
            onContextMenu={(e) => e.preventDefault()}
            ref={videoUrl}
            controls
            url={url}
            playsinline
            playbackRate={1}
            muted={false}
            playing={false}
            className="react-player"
            fluid={false}
            width="100%"
            height="100%"
            // onProgress={(e) => handleWatchComplete(e.played, url)}
            // onProgress={(e) => onProgress(e.played, url)}
            onEnded={(e) => handleWatchComplete(e, url)}
        />
    );
};

export default VideoPlayer;
