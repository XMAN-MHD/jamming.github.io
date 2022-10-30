import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search()
    {
        if(this.props.onSearch !== undefined)
        {
            this.props.onSearch(this.state.term);
        } 
    }

    handleTermChange(e)
    {
        this.setState(
            {
                term : e.target.value
            }
        );
    }

    render()
    {
        return(
            
            <div className='SearchBar'>
                <input 
                    placeholder='Enter A Song, Album, or Artist'
                    onClick={this.handleTermChange}                
                />
                <button className='SearchButton'>SEARCH</button>
            </div>
        );
    }
}


export default SearchBar;