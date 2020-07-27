import React from 'react';

const VideoDetail =(props) =>{
    if(!props.videoSelected){
        return <div>Search and Click on the video lo play ! </div>
    }
    const VIDEO_SRC=`https://www.youtube.com/embed/${props.videoSelected.id.videoId}`;
    return (
    <div> 
        <div className="ui embed">
            <iframe src={VIDEO_SRC} title="videoplayer" />
        </div>
        <div className="ui segment">
        <h4 className="ui header">{props.videoSelected.snippet.title}</h4>
        <p>{props.videoSelected.snippet.description}</p>
        </div>
    </div>
    );
}

export default VideoDetail;