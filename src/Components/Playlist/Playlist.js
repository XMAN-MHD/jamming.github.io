import React from 'react'; 
import ReactDOM from 'react-dom';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';


class Playlist extends React.Component 
{
    render()
    {
        let songs = this.props.playlistTracks.slice(0);

        return(
            <div className='Playlist'>
                <input defaultValue={"New Playlist"} />
                {/* Add a tracklist component below */}
                <TrackList tracks = {songs}/>
                <button className='Playlist-save'>SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;