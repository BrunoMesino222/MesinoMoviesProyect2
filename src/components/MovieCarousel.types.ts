export type MovieCarouselT = {
    target?: MovieQuery;
}

export type MovieQuery = "popular" | "top_rated" | "upcoming" | "on_the_air"