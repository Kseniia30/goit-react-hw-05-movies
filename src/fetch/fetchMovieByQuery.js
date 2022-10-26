import axios from "axios"

const key = "7cdf478795ad4657f8647bebd5408f4d"

export const fetchMovieByQuery = (query) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}&language=en-US&page=1&include_adult=false`)
}