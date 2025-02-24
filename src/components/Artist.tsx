import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

interface ArtistProps {
    image: string
    name: string
    handleOpenArtist: () => void
}

export const Artist = ({ image, name, handleOpenArtist }: ArtistProps) => {

    return (
        <div className="artist-box">
            <div className="position-relative">
                <img src={image} alt={name} />
                <div className="menu">
                    <div className="actions">
                        <FontAwesomeIcon icon={faCircleRight} onClick={handleOpenArtist} />
                    </div>
                </div>
            </div>
            <p className="title">
                {name}
            </p>
        </div>
    )
}