import { useNavigate, useParams } from 'react-router-dom';

// import { resultList } from '../../multi-search.ts';
import { useGetSearchResultQuery } from '../services/shazamApi.ts';
import { useAppDispatch } from '../store/hook.ts';
import { playSong } from '../features/playerSlice.ts';
import { Song } from '../components/Song.tsx';
import { Song as SongInterface } from '../types/index.ts';
import { GridRow } from '../components/GridRow.tsx';
import { Artist } from '../components/Artist.tsx';
import { LoadingScreen } from '../components/Loading.tsx';

export const Search = () => {
    const { searchTerm } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { data, isLoading, error } = useGetSearchResultQuery(searchTerm);

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (error) {
        return <div>error</div>;
    }


    const hasTracks = data.tracks && data.tracks.hits.length > 0;
    const hasArists = data.artists.hits && data.artists.hits.length > 0;

    const handlePlaySong = (song: SongInterface) => {
        dispatch(playSong(song))
    }

    const handleOpenArtist = (artistId: string) => {
        const path = `/artist/${artistId}`
        navigate(path);
    }

    const renderSongs = () => {
        let songsArr = []

        for (let song of data.tracks.hits) {
            if(song.track.hub.actions){
                console.log(song.track.hub.actions)
                const songObject = {
                    id: song.track.key,
                    title: song.track.title,
                    subtitle: song.track.subtitle,
                    genres: song.track.type,
                    releaseDate: null,
                    audioSrc: song.track.hub.actions[1].uri,
                    image: song.track.images.coverart,
                    artistId: +song.track.artists[0].adamid!,
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
                );
            }
        }

        return songsArr;
    }

    const renderArtists = () => {
        let artistsArr = []

        for (let artist of data.artists.hits) {
            artistsArr.push(
                <Artist
                    key={artist.artist.adamid}
                    name={artist.artist.name}
                    image={artist.artist.avatar}
                    handleOpenArtist={() => handleOpenArtist(artist.artist.adamid)}
                />
            );
        }

        return artistsArr;
    }

    return (
        <div className="container">
            <h1 className="mb-4">
                Search result for: {searchTerm}
            </h1>
            {hasTracks ?
                <div>
                    <h2 className="">
                        Tracks
                    </h2>
                    <GridRow children={renderSongs()} />
                </div> : null}

            {hasArists ?
                <div>
                    <h2>
                        Artists
                    </h2>
                    <GridRow children={renderArtists()} />
                </div> : null}
        </div>
    )
}