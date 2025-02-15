import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Navbar = () => {
    const [searchVal, setSearchVal] = useState('');
 
    return (
        <nav className="navbar">
            <div className="container">
                <span className="search-input-box">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                    <input
                        type="text"
                        placeholder='Search for songs'
                        value={searchVal}
                        onChange={(event) => setSearchVal(event.target.value)}
                    />
                    { searchVal.length > 0 ? <FontAwesomeIcon icon={faXmark} className='delete-icon' onClick={() => setSearchVal('')} /> : null }
                </span>
            </div>
        </nav>
    )
}