import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';

import { artist as artistData } from '../../artist.js';

export const Artist = () => {
    let artistTemp = artistData.data[0];

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

                <div>
                    {parse(artistObject.bio)}
                </div>
            </div>
        </div>
    )
}