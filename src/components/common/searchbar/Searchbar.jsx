import React from "react";

function SearchBar () {
    return(
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Furniture Search  </span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search something cool"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    )
}

export default SearchBar;