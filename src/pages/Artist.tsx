import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';

import { useGetArtistQuery } from '../services/shazamApi.ts';
// import { artist as artistData } from '../../artist.ts';
import { LoadingScreen } from '../components/Loading.tsx';

export const Artist = () => {
    const { artistId } = useParams();
    const { data, isLoading, error } = useGetArtistQuery(artistId);

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (error) {
        return <div>error</div>;
    }

    let artistTemp = data;

    const artistObject = {
        name: artistTemp.attributes.name,
        origin: artistTemp.attributes.origin,
        bio: artistTemp.attributes.artistBio,
        genres: artistTemp.attributes.genreNames,
        albums: artistTemp.views['full-albums'].data,
        avatar: artistTemp.avatar,
    };

    return (
        <div className="container">
            <div className="artist-page">
                <div className="artist-bio mb-4">
                    <img className="artist-image" src={artistObject.avatar} alt="" />
                    <div>
                        <h1>
                            {artistObject.name}
                        </h1>
                        <h2>
                            {artistObject.origin}
                        </h2>
                        <h3 className="fc-broken-white mb-4">
                            {artistObject.genres}
                        </h3>
                        <button className="btn-default primary-btn btn-third-color">
                            <FontAwesomeIcon icon={faArrowDown} /> Albums
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    {parse(artistObject.bio)}
                </div>

                <h2 className="mb-4 text-center">
                    Albums
                </h2>
                <div className="album-container">
                    {artistObject.albums.map((album) =>
                        // console.log(album)
                        <div className="album-box" key={album.id}>
                            <img src={album.attributes.artwork.url} alt="" />
                            <div className="description">
                                <h3>
                                    {album.attributes.name}
                                </h3>
                                <span className="fc-broken-white"> ({album.attributes.releaseDate.substring(0, 4)}) </span>
                                <p>
                                    {album.attributes.editorialNotes.short}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}