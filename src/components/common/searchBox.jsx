import React from 'react';
const SearchBox = (props) => {
    return (  
        <div className="form-group">
        <input type="search" className="form-control w-50" placeholder="Search..." onChange={props.onSearch}  />
        </div>
    );
}
 
export default SearchBox;