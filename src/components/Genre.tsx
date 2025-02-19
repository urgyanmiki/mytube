import { useNavigate } from 'react-router-dom';

interface GenreProps {
    title: string,
    value: string,
    transformedUrl: string,
}

export const Genre = ({title, transformedUrl}: GenreProps) => {
    const navigate = useNavigate();

    const navigateGenre = (transformedUrl: string) => {
        const path = `/genre/${transformedUrl}`;
        navigate(path)
    }

    return (
        <span className="genre" onClick={() => navigateGenre(transformedUrl)}>
            {title}
        </span>
    )
}