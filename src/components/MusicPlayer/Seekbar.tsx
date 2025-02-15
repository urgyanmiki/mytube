interface SeekbarProps {
    duration: number,
    currentTime: number,
    onSetSeekTime: (seekTime: number) => void
}

export const Seekbar = ({duration, currentTime, onSetSeekTime}: SeekbarProps) => {
    return (
        <div className="seekbar">
            <input
                min={0}
                max={duration}
                value={currentTime}
                type="range"
                step="any"
                onInput={(event) => onSetSeekTime(+event?.target.value)}
            />
        </div>
    )
}