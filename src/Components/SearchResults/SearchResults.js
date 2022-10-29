import React from 'react';
import ReactDOM from 'react-dom';
import "./SearchResults.css"
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component
{
    render()
    {
        let tracks = this.props.searchResults.slice(0);
        return(

            <div className='SearchResults'>
                <h2>Results</h2>
              
                {/* Add a tracklist component below */}
                <TrackList tracks={tracks} />
            </div>

        );
    }
}

export default SearchResults;