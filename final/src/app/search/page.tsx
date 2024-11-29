import React from 'react';

function SearchComponent({ searchCourse, courseSearchUserFunction }:{searchCourse:any,courseSearchUserFunction:any}) {
    return (
        <header className="App-header">
            <h1>Book Store Catalog</h1>
            <div className="search-bar text-black">
                <input
                    type="text"
                    placeholder="Search Catalog for books."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}

export default SearchComponent;