import { fetchTrending } from "fetch/fetchTrending"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { MainItem, MainLink, MainList, HomeTitle } from "./Home.styled"

const HomeMain = () => {
    const [movies, setMovies] = useState([])
    const location = useLocation()
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            fetchTrending().then(res => {
            const results = res.data.results
                setMovies(results)
        })
            isFirstRender.current = false
        }
    }, [])

    if (!movies) {
        return null
    }

    return (
        <main>
            <HomeTitle>Trending today</HomeTitle>
            <MainList>
                {movies.map(movie => {
                    return (
                        <MainItem key={movie.id}>
                            <MainLink to={`/movies/${movie.id}`} state={{from: location}}>{movie.original_title}</MainLink>
                        </MainItem>)
                })}
            </MainList>
        </main>
    )
}

export default HomeMain