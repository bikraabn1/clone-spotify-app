export interface Welcome {
    tracks:  Tracks;
    artists: Artists;
}

export interface Artists {
    href:     string;
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
    items:    ArtistsItem[];
}

export interface ArtistsItem {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          Type;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  null;
    total: number;
}

export interface Image {
    height: number;
    width:  number;
    url:    string;
}

export enum Type {
    Artist = "artist",
}

export interface Tracks {
    href:     string;
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
    items:    TracksItem[];
}

export interface TracksItem {
    album:         Album;
    artists:       Artist[];
    disc_number:   number;
    duration_ms:   number;
    explicit:      boolean;
    external_ids:  ExternalIDS;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    is_local:      boolean;
    is_playable:   boolean;
    name:          string;
    popularity:    number;
    preview_url:   null;
    track_number:  number;
    type:          string;
    uri:           string;
}

export interface Album {
    album_type:             string;
    artists:                Artist[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    is_playable:            boolean;
    name:                   string;
    release_date:           Date;
    release_date_precision: string;
    total_tracks:           number;
    type:                   string;
    uri:                    string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            ID;
    name:          Name;
    type:          Type;
    uri:           URI;
}

export enum ID {
    The1DfeR4HaWDBWqFHLkxsg1D = "1dfeR4HaWDbWqFHLkxsg1d",
    The4LaimQU44Rsz2KMWQmY6BI = "4LaimQU44rsz2kMWQmY6Bi",
    The4Phfy4O60WGqoPQFl5OCP8 = "4Phfy4o60wGqoPQFl5oCP8",
}

export enum Name {
    Forestella = "Forestella",
    JohnAdams = "John Adams",
    Queen = "Queen",
}

export enum URI {
    SpotifyArtist1DfeR4HaWDBWqFHLkxsg1D = "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d",
    SpotifyArtist4LaimQU44Rsz2KMWQmY6BI = "spotify:artist:4LaimQU44rsz2kMWQmY6Bi",
    SpotifyArtist4Phfy4O60WGqoPQFl5OCP8 = "spotify:artist:4Phfy4o60wGqoPQFl5oCP8",
}

export interface ExternalIDS {
    isrc: string;
}
