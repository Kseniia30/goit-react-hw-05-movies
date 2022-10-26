import axios from "axios"

const key="7cdf478795ad4657f8647bebd5408f4d"

export const fetchTrending = () => {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
}