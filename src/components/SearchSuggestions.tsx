import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useGetSearchSuggestQuery } from "../services/shazamApi";

interface SearchSuggestionProps {
    searchTerm: string
    setSearchVal: (suggestion: string) => void
}

export const SearchSuggestions = ({ searchTerm, setSearchVal }: SearchSuggestionProps) => {
    const navigate = useNavigate();
    const { data, isLoading, error } = useGetSearchSuggestQuery(searchTerm);

    if(isLoading) {
        return <div> Searching...</div>;
    }

    if(error) {
        return <div> Something went wrong...</div>;
    }

    const handleOpenSearch = (suggestion: string) => {
        const path = `/search/${suggestion}`;
        setSearchVal(suggestion);
        navigate(path);
    }

    return (
        <div className="search-suggestion">
            {data.hints.map((suggestion: any) => 
                <p onMouseDown={() => handleOpenSearch(suggestion.term)} key={suggestion.term}> 
                   <FontAwesomeIcon icon={faMagnifyingGlass} /> {suggestion.term} 
                </p>
            )}
        </div>
    )
}