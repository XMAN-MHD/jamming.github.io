import React from 'react'; 
import 'Track.css'; 


class Track extends React.Component 
{
    render()
    {
        return(

            <div className='Track'>
                <div className='Track-information'>
                    <h3>{/** Track information will go here */}</h3>
                    <p>{/** Track artist will go here */} | {/** Track album will go here */}</p>
                </div>
                <button type="" className='Track-action'>{/** + or - will go here */}</button>
            </div>
        
        );
    }
}