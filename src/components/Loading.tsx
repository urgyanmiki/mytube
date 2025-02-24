import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const LoadingScreen = () => {
    return (
        <div className="loading-box">
            <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" />
        </div>
    )
}