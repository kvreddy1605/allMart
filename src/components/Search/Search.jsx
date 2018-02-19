import React from 'react';

const Search = (props) => {
    return (
        <input type="text" 
            onChange={(event) => props.onSearch(event)} />
    );
}

export default Search;