import { songList } from '../../songs.ts';
import { Song } from '../components/Song.js';
import { useAppDispatch } from '../store/hook.js';
import { playSong } from '../features/playerSlice.js';
import { Song as SongInterface } from '../types/index.js';
import { GridRow } from '../components/GridRow.js';
import { Genres } from '../components/Genres.js';

export const Home = () => {
    const dispatch = useAppDispatch();

    const handlePlaySong = (song: SongInterface) => {
        dispatch(playSong(song))
    }

    const renderSongs = () => {
        let songsArr = [];

        for (let song of songList) {
            const songObject = {
                id: song.key,
                title: song.title,
                subtitle: song.subtitle,
                genres: song.genres.primary,
                audioSrc: song.hub.actions[1].uri!,
                image: song.images.coverart,
            }

            songsArr.push(
                <Song
                    key={song.key}
                    handlePlaySong={() => handlePlaySong(songObject)}
                    title={songObject.title}
                    subtitle={songObject.subtitle}
                    image={songObject.image}
                />
            );
        }

        return songsArr;
    }

    return (
        <div className="container">
            <h2 className='mb-4'>
                Home Page
            </h2>
            <Genres />
            <GridRow children={renderSongs()} />
        </div>
    )
}