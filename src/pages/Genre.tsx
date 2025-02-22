import { useParams } from 'react-router-dom';

import { genreTestArr } from '../../genre.js';
import { genreList } from '../../genres.js';
import { Song } from '../components/Song.js';
import { useAppDispatch } from '../store/hook.js';
import { playSong } from '../features/playerSlice.js';
import { Song as SongInterface } from '../types/index.ts';
import { Genre as GenreInterface } from '../types/index.ts';
import { useGetGenreQuery } from '../services/shazamApi.ts';
import { LoadingScreen } from '../components/Loading.tsx';

export const Genre = () => {
    const { transformedUrl } = useParams();
    const genre = genreList.find((genre: GenreInterface) => genre.transformedUrl === transformedUrl)

    const { data, isLoading, error } = useGetGenreQuery(genre?.value);
    console.log(data);
    if (isLoading) {
        return <LoadingScreen />;
    }

    if (error) {
        return <div>error</div>;
    }

    const dispatch = useAppDispatch();

    const handlePlaySong = (song: SongInterface) => {
        dispatch(playSong(song))
    }

    const renderSongs = () => {
        let songsArr = [];

        for (let song of data) {
            const songObject = {
                id: song.id,
                title: song.attributes.name,
                subtitle: song.attributes.artistName,
                genres: song.attributes.genreNames[0],
                releaseDate: null,
                audioSrc: song.attributes.previews[0].url,
                image: song.attributes.artwork.url,
                artistId: song.relationships.artists.data[0].id,
            }
            songsArr.push(
                <Song
                    key={songObject.id}
                    title={songObject.title}
                    subtitle={songObject.subtitle}
                    image={songObject.image}
                    handlePlaySong={() => handlePlaySong(songObject)}
                    artistId={songObject.artistId}
                />
            )
        }

        return songsArr;
    }

    return (
        <div className="container">
            <h1 className="mb-4">
                {genre?.title}
            </h1>
            <div className="genre-grid">
                {renderSongs()}
            </div>
        </div>
    )
}