import { GridRow } from '../components/GridRow';
import { Playlist } from '../components/Playlist';
import { useAppSelector } from '../store/hook';
import { useAppDispatch } from '../store/hook';
import { startPlaylist } from '../features/playerSlice';


export const Playlists = () => {
    const playlists = useAppSelector((state) => state.playlist.playlists);
    const dispatch = useAppDispatch();

    const renderPlaylists = () => {
        let playlistArr = [];

        for (let playlist of playlists) {
            playlistArr.push(
                <Playlist
                    key={playlist.id}
                    id={playlist.id}
                    title={playlist.title}
                    description={playlist.description}
                    img={playlist.songs.length > 0? playlist.songs[0].image : 'https://placehold.co/400'}
                    handleStartPlaylist={() => dispatch(startPlaylist(playlist))}
                />
            )
        }

        return playlistArr;
    }

    return (
        <div className="container">
            <h2 className='mb-4'>
                Playlists
            </h2>
            <GridRow children={renderPlaylists()} />
        </div>
    )
}