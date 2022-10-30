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
    }

    renderAction()
    {
        if(this.props.isRemoval)
        {
            return <button className="Track-action">-</button>
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
            let track = this.props.trackObject;
            this.props.onAdd(track);
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