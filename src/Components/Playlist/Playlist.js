import React from 'react'; 
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList';


export class Playlist extends React.Component 
{
    render()
    {
        return(

            <div className='Playlist'>
                <input type="" name="" value={'New Playlist'} />
                {/* Add a tracklist component below */}
                <TrackList />
                <button type="" className='Playlist-save'>SAVE TO SPOTIFY</button>
            </div>

        );
    }
}