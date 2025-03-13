import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { SearchSuggestions } from './SearchSuggestions';

export const Navbar = () => {
    const [searchVal, setSearchVal] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchTerm(searchVal);
        }, 500);

        return () => clearTimeout(handler);
    }, [searchVal]);

    return (
        <nav className="navbar">
            <div className="container">
                <span className="search-input-box"
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search for songs"
                        value={searchVal}
                        onChange={(event) => setSearchVal(event.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />
                    {searchVal.length > 0 ? <FontAwesomeIcon icon={faXmark} className="delete-icon" onClick={() => setSearchVal("")} /> : null}
                    {isSearchFocused && searchTerm.length > 1 ? <SearchSuggestions setSearchVal={setSearchVal} searchTerm={searchTerm} /> : null}
                </span>
            </div>
        </nav>
    )
}