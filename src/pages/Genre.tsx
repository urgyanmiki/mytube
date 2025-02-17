import { useParams } from 'react-router-dom';

import { genreTestArr } from '../../genre.js';
import { genreList } from '../../genres.js';
import { Song } from '../components/Song.js';
import { useAppDispatch } from '../store/hook.js';
import { playSong } from '../features/playerSlice.js';

export const Genre = () => {
    const { genreId } = useParams();
    const genre = genreList.find((genre) => genre.value === genreId)

    const dispatch = useAppDispatch();

    const handlePlaySong = (song: SongInterface) => {
        dispatch(playSong(song))
    }

    const renderSongs = () => {
        let songsArr = [];

        for (let song of genreTestArr) {
            const songObject = {
                id: song.id,
                title: song.attributes.name,
                subtitle: song.attributes.artistName,
                genres: song.attributes.genreNames[0],
                audioSrc: song.attributes.previews[0].url,
                image: song.attributes.artwork.url,
            }
            songsArr.push(
                <Song
                    key={songObject.id}
                    title={songObject.title}
                    description={songObject.subtitle}
                    image={songObject.image}
                    handlePlaySong={() => handlePlaySong(songObject)}
                />
            )
        }

        return songsArr;
    }

    return (
        <div className="container">
            <h1 className="mb-4">
                {genre.title}
            </h1>
            <div className="genre-grid">
                {renderSongs()}
            </div>
        </div>
    )
}