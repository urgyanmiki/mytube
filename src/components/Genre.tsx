import { useNavigate } from "react-router-dom"

interface GenreProps {
    title: string,
    value: string,
}

export const Genre = ({title, value}: GenreProps) => {
    const navigate = useNavigate();

    const navigateGenre = (value: string) => {
        const path = `genre/${value}`;
        navigate(path)
    }

    return (
        <span className="genre" onClick={() => navigateGenre(value)}>
            {title}
        </span>
    )
}