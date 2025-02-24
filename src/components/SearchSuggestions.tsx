import { useGetSearchSuggestQuery } from "../services/shazamApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface SearchSuggestionProps {
    searchTerm: string
}

export const SearchSuggestions = ({ searchTerm }: SearchSuggestionProps) => {
    const { data, isLoading, error } = useGetSearchSuggestQuery(searchTerm);

    if(isLoading) {
        return <div> Searching...</div>;
    }

    if(error) {
        return <div> Something went wrong...</div>;
    }

    return (
        <div className="search-suggestion">
            {data.hints.map((suggestion: any) => 
                <p> 
                   <FontAwesomeIcon icon={faMagnifyingGlass} /> {suggestion.term} 
                </p>
            )}
        </div>
    )
}