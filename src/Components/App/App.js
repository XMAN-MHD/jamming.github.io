import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/spotify';

class App extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      searchResults:[
        {id:1, name:'name1', artist:'artist1', album:'album1'},
        {id:2, name:'name2', artist:'artist2', album:'album2'},
        {id:3, name:'name3', artist:'artist3', album:'album3'}
      ], 
      playlistName : 'My playlist', 
      playlistTracks :  [
        {id:4, name:'playlist1', artist:'playlist artist1', album:'playlist album1'},
        {id:5, name:'playlist2', artist:'playlis tartist2', album:'playlist album2'},
        {id:6, name:'playlist3', artist:'playlist artist3', album:'playlist album3'}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);  
    this.updatePlaylistName = this.updatePlaylistName.bind(this); 
    this.savePlaylist = this.savePlaylist.bind(this); 
    this.search = this.search.bind(this);
  }

  addTrack(playlistTrack) 
  {
    let playlistTracks = this.state.playlistTracks;
    if(playlistTracks.every(value => value.id !== playlistTrack.id))
    {
      playlistTracks.push(playlistTrack);

      this.setState(
        {
          playlistTracks : playlistTracks
        }
      )
    }
  }

  removeTrack(playlistTrack)
  {
    let playlistTracks = this.state.playlistTracks;
    let newPlaylistTracks = playlistTracks.filter(
      (track) =>{
        return track.id !==  playlistTrack.id 
      }
    );
    this.setState(
     {playlistTracks : newPlaylistTracks}
    );
  }

  updatePlaylistName(newPlaylistName)
  {
    this.setState(
      {
        playlistName : newPlaylistName
      }
    );
  }

  savePlaylist()
  {
    const trackUris = this.props.Playlist.map( (track) => {return track.uri})
  }

  search(term)
  {
    Spotify.search(term);
  }

  render()
  {
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* Add a SearchBar component below */}
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {/* /Add a SearchResults component below */} 
            <SearchResults searchResults={this.state.searchResults} onAdd = {this.addTrack}/>
            {/* Add a Playlist component below */}
            <Playlist 
            playlistName = {this.state.playlistName} 
            playlistTracks = {this.state.playlistTracks}  
            onRemove = {this.removeTrack} 
            onPlaylistNameChange = {this.updatePlaylistName}
            onPlaylistSave = {this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
