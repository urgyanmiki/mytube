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
    id: number
    title: string
    description: string
    songs: Array<Song>
}

export interface Album {
    id: number
    artistName: string // attributes.artistName
    name: string // attributes.releaseDate
    image: string // attributes.editorialArtwork.superHeroTall.url
    releasteDate: string // attributes.releaseDate
    copyright: string // attributes.copyright
}

export interface Artist {
    id: number
    name: string // attributes.name
    origin: string // attributes.origin
    bio: string // attributes.artistBio
    genres: Array<string> // attributes.genreNames
    albums: Array<Album> // attributes.views.full-albums.data
    avatar: string
}