import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';
class YoutubeCompPage extends Component{
    render(){
        return(
            <Fragment>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp time="12.13" title="Code Geass - Episode 1" desc="1000x ditonton. 3 hari yang lalu"/>
                <YoutubeComp time="7.10" title="Code Geass - Episode 2" desc="2000x ditonton. 5 hari yang lalu"/>
                <YoutubeComp time="9.30" title="Code Geass - Episode 3" desc="3000x ditonton. 6 hari yang lalu"/>
                <YoutubeComp time="18.24" title="Code Geass - Episode 4" desc="4000x ditonton. 8 hari yang lalu"/>
                <YoutubeComp/>
            </Fragment>
        )
    }
}

export default YoutubeCompPage;