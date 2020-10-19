import React from 'react';
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://usercontent1.hubstatic.com/13807430_f520.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: "00.00",
    title: "Code Geass - Ova",
    desc: "xx ditonton. x hari yang lalu"
}

export default YoutubeComp;