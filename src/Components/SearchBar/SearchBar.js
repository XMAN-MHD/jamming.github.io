import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component
{
    render()
    {
        return(
            
            <div className='SearchBar'>
                <input type="" name="" value="" placeholder='Enter A Song, Album, or Artist' />
                <button type="" className='SearchButton'>SEARCH</button>
            </div>
        );
    }
}