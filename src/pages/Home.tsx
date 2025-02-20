import { Song } from '../components/Song.js';
import { useAppDispatch } from '../store/hook.js';
import { playSong } from '../features/playerSlice.js';
import { Song as SongInterface } from '../types/index.js';
import { Genres } from '../components/Genres.js';
import { useGetWorldChartQuery } from '../services/shazamApi.js';
import { LoadingScreen } from '../components/Loading.js';

export const Home = () => {
    const dispatch = useAppDispatch();
    const { data, error, isLoading } = useGetWorldChartQuery();

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (error) {
        return <div>error</div>;
    }

    const handlePlaySong = (song: SongInterface) => {
        dispatch(playSong(song))
    }

    const renderSongs = () => {
        let songsArr = [];

        for (let song of data) {
            if (song.attributes.previews[0]) {
                const songObject = {
                    id: song.id,
                    title: song.attributes.name,
                    subtitle: song.attributes.artistName,
                    genres: song.attributes.genreNames[0],
                    audioSrc: song.attributes.previews[0].url,
                    image: song.attributes.artwork.url,
                    artistId: song.relationships.artists.data[0].id,
                }

                songsArr.push(
                    <Song
                        key={song.id}
                        handlePlaySong={() => handlePlaySong(songObject)}
                        title={songObject.title}
                        subtitle={songObject.subtitle}
                        image={songObject.image}
                        artistId={songObject.artistId}
                    />
                );
            }
        }

        return songsArr;
    }

    return (
        <div className="container">
            <h2 className='mb-4'>
                Home Page
            </h2>
            <Genres />
            <div className="genre-grid">
                {renderSongs()}
            </div>
        </div>
    )
}