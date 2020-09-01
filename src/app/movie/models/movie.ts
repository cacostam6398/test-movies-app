export interface Movie {
    popularity: number,
    vote_count: number,
    video: boolean,
    poster_path: string,
    id: number,
    adult: boolean,
    backdrop_path: string,
    original_language: string,
    original_title: string,
    genre_ids: number[],
    title: string,
    vote_average: number,
    overview: string,
    release_date: string
}

export interface filterMoviesDTO {
    query: string,
    include_adult: boolean,
    page: number,
    language: string
}

export interface MovieDetailDTO {
    adult: boolean,
    backdrop_path: string,
    budget: number,
    genres: genresDTO[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: number,
    release_date: string,
    revenue: string,
    runtime: number,
    spoken_languages: any[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}


export interface genresDTO {
    id: number,
    name: string
}


export interface GuestSessionDTO {
    success: boolean,
    guest_session_id: string,
    expires_at: string
}