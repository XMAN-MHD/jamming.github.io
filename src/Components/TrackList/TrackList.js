import React from "react";
import ReactDOM from 'react-dom';
import './TrackList.css';
import Track from "../Track/Track";

class TrackList extends React.Component
{
    render()
    {
        let tracks = this.props.tracks.slice(0);
        return(
            
            <div className="TrackList">
                {/** add a map method that renders a set of Track components below */}
                {
                    tracks.map(
                        (value, index)=>{
                            return <Track trackObject = {value} key={index}/>
                        }
                    )
                }
            </div>
        );
    }
}


export default TrackList;