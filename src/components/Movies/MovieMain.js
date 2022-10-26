import MovieMainList from "./MovieList"
import MovieSearchForm from "./MovieSearchForm"
import { fetchMovieByQuery } from "fetch/fetchMovieByQuery"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const MovieMain = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("query") ?? ""
    const [queryItem, setQueryItem] = useState(query !== "" ? query : "")
    const [movieList, setMovieList] = useState([])


    useEffect(() => {
        if (queryItem === "") {
            return
        }

        fetchMovieByQuery(queryItem).then(res => {
            const results = res.data.results
            setMovieList(results)
        })
    }, [queryItem])

    const submitInfo = (evt) => {
        const value = evt.target.elements.movie.value
        evt.preventDefault()
        setQueryItem(value);
        setSearchParams(value !== "" ? {query: value.toLowerCase().trim()} : {})
    }
    return (
        <>
            <MovieSearchForm submitInfo={submitInfo}/>
            <MovieMainList movieSearchList={movieList}/>
        </>
    )
}
export default MovieMain