import React from 'react';
import "./SearchResults.css"
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component
{
    render()
    {
        return(

            <div className='SearchName'>
                <h2>Results</h2>
                {/* Add a tracklist component below */}
                <TrackList />
            </div>

        );
    }
}

export default SearchResults;