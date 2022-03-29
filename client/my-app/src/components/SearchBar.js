import React from "react";

const SearchBar = (props) => {
    return (
        <div>
        <form onSubmit={props.onSubmit1}>
            <input
                type='text'
                name='search'
                value={props.value1}
                placeholder="Search Companies"
                onChange={props.onChange}
            />
            <button type="submit">
                Search
            </button>
        </form>
       
        </div>
    )
}

export default SearchBar