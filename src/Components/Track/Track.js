import React from 'react'; 
import ReactDOM from 'react-dom';
import './Track.css'; 


class Track extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.renderAction = this.renderAction.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction()
    {
        if(this.props.isRemoval)
        {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        }
        else 
        {
            return <button className="Track-action" onClick={this.addTrack}>+</button>
        }
    }

    addTrack()
    {
        if(this.props.onAdd !== undefined)
        {
            let playlistTrack = this.props.trackObject;
            this.props.onAdd(playlistTrack);
        }
    }

    removeTrack()
    {
        if(this.props.onRemove !== undefined)
        {
            let playlistTrack = this.props.trackObject;
            this.props.onRemove(playlistTrack);
        }
    }
    
    render()
    { 
        let trackObject = this.props.trackObject;
        
        return(
            
            <div className='Track'>
                <div className='Track-information'>
                    <h3>
                        {trackObject.name}
                    </h3>
                    <p>{trackObject.artist} | {trackObject.album}</p>
                </div>
                {this.renderAction()} 
            </div>
        
        );
    }
}

export default Track;