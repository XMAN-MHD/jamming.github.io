import React from 'react'; 
import ReactDOM from 'react-dom';
import './Track.css'; 


class Track extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.renderAction = this.renderAction.bind(this);
    }
    renderAction()
    {
        if(this.props.isRemoval)
        {
            return <button className="Track-action">-</button>
        }
        else 
        {
            return <button className="Track-action">+</button>
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