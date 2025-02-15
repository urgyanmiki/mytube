interface SongGenre {
    primary: string
}

interface SongImage {
    background: string
    coverart: string
}

interface SongArtist {
    alias: string
    id: string
}

interface SongAction {
    name: string
    type: string
    id?: string
    uri?: string
}

interface SongHub {
    actions: Array<SongAction>
}

interface ArtistAttribute {
    name: string
    bornOrFormed: string
    artistBio: string
}

export interface Song {
    id: string
    title: string
    subtitle: string
    genres: SongGenre
    image: string
    releaseDate: string
    artists?: Array<SongArtist>
    audioSrc: string
}

export interface PlayerInitialState {
    queuedSongs: Array<Song>
    isPlaying: boolean
    genreId?: string
}

export interface Playlist {
    id: string
    title: string
    description: string
    songs: Array<Song>
}

export interface Artist {
    id: number,
    attributes: ArtistAttribute
    avatar: string
}