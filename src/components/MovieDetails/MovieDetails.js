import { fetchMovieById } from "fetch/fetchMovieById"
import { Suspense, useEffect, useRef, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import {BackBTN, MainDetailsBox, MainDetailsIMG, TextDetailsBox, Title, Text, TopText, Span, AdditionalNavLink} from "./MovieDetails.styled"

const posterStartPath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"

const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    const location = useLocation()
    const backLinkHref = location.state?.from ?? "/";
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            fetchMovieById(Number(movieId)).then(setMovie)
        } isFirstRender.current = false
    }, [movieId])    
    
    if (!movie) {
        return
    }
    const {poster_path, title, original_title, vote_average, overview, genres} = movie.data
    const genreList = []
    genres.map(genre => {
        genreList.push(genre.name)
        return genreList
    })
    return (
        <>
            <BackBTN type="button"><Link to={backLinkHref}> Go back</Link></BackBTN>
            <MainDetailsBox>
                {poster_path ? (<MainDetailsIMG src={`${posterStartPath}${poster_path}`} alt={title} />)  : (<MainDetailsIMG src="https://bipbap.ru/wp-content/uploads/2017/06/20121306123427.jpg" alt={title}/>)}
                <TextDetailsBox>
                    <Title>{original_title}</Title>
                    <Text><Span>Vote avarage:</Span> {vote_average.toFixed(2)}</Text>
                    <TopText>Overview</TopText>
                    <Text>{overview}</Text>
                    <TopText>Genres</TopText>
                    <Text>{genreList.join(", ")}</Text>
                </TextDetailsBox>
            </MainDetailsBox>
            <div>
                <TopText>Additional Information</TopText>
                <ul>
                    <li><AdditionalNavLink to={`/movies/${movieId}/cast`} state={{ from: backLinkHref }}>Cast</AdditionalNavLink></li>
                    <li><AdditionalNavLink to={`/movies/${movieId}/reviews`} state={{ from: backLinkHref }}>Reviews</AdditionalNavLink></li>
                </ul>
            </div>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            
        </>
    )
}

export default MovieDetails

