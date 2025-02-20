export interface Song {
    id: string
    title: string
    subtitle: string
    genres: string
    releaseDate?: string | null
    audioSrc: string
    image: string
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

export interface Genre {
    title: string
    value: string
    transformedUrl: string
}