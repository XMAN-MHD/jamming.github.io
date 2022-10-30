import React from "react";
import ReactDOM from 'react-dom';
import './TrackList.css';
import Track from "../Track/Track";

class TrackList extends React.Component
{
    constructor(props)
    {
        super(props); 
        
    }
    
    render()
    {
        let tracks = this.props.tracks.slice(0);
        return(
            
            <div className="TrackList">
                {/** add a map method that renders a set of Track components below */}
                {
                    tracks.map(
                        (value, index) => {
                            return <Track 
                            onAdd = {this.props.onAdd} 
                            trackObject = {value} key={index}  
                            onRemove = {this.props.onRemove} isRemoval = {this.props.isRemoval} 
                            />
                        }
                    )
                }
            </div>
        );
    }
}


export default TrackList;