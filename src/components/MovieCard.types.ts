export type MovieType = {
    adult?: boolean,
    overview?:string,
    poster_path?: string,
    title?: string,
    genre_ids?: number[],
    id?: number,
    vote_average?: number
    name?: string
}
export type CardComponentT = {
    data:MovieType
}
