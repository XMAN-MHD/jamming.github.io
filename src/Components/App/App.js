import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
class App extends React.Component 
{
  render ()
  {
    return(
      
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* Add a SearchBar component below */}
          <SearchBar />
          <div className="App-playlist">
            {/* /Add a SearchResults component below */} 
            <SearchResults />
            {/* Add a Playlist component below */}
            <Playlist />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
