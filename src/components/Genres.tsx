import { genreList } from '../../genres.ts'
import { Genre } from './Genre.js';
import { GridRow } from './GridRow.js';

export const Genres = () => {
    const renderGenres = () => {
        let genres = [];

        for (let genre of genreList){
            genres.push(
                <Genre key={genre.value} title={genre.title} value={genre.value} transformedUrl={genre.transformedUrl} />
            );
        }

        return genres;
    }

    return (
        <GridRow children={renderGenres()} />
    )
}