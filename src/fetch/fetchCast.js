import axios from "axios"

const key = "7cdf478795ad4657f8647bebd5408f4d"

export const fetchCast = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
} 