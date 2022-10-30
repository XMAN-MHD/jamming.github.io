import React from 'react'; 
import ReactDOM from 'react-dom';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';


class Playlist extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.handlePlaylistNameChange = this.handlePlaylistNameChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handlePlaylistNameChange(e)
    {
        if(this.props.onPlaylistNameChange !== undefined)
        {
            this.props.onPlaylistNameChange(e.target.value)
        }
    }
    handleButtonClick(e)
    {
        if(this.props.onPlaylistSave !== undefined)
        {
            this.props.onPlaylistSave();
        }
    }

    render()
    {
        let songs = this.props.playlistTracks.slice(0);

        return(
            <div className='Playlist'>
                <input defaultValue="New Playlist" onChange={this.handlePlaylistNameChange} />
                {/* Add a tracklist component below */}
                <TrackList tracks = {songs} onRemove = {this.props.onRemove} isRemoval = {true} />
                <button className='Playlist-save' onClick = {this.handleButtonClick} >SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;