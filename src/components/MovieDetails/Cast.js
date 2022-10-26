import { fetchCast } from "fetch/fetchCast"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { CastIMG, CastItem, Span } from "./MovieDetails.styled"

const posterStartPath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"

const Cast = () => {
    const { movieId } = useParams()
    const [movieCast, setMovieCast] = useState(null)
    const isFirstRender = useRef(true)


    useEffect(() => {
        if (isFirstRender.current) {
            fetchCast(movieId).then(setMovieCast)
        } isFirstRender.current = false
    }, [movieId])

    if (!movieCast) {
        return
    }

    return (
        <ul>
            {movieCast.data.cast.map(cast => {
                const { name, character, profile_path, cast_id } = cast
                return (
                    <CastItem key={cast_id}>
                        {profile_path ? (<CastIMG src={`${posterStartPath}${profile_path}`} alt={name} />) : (<CastIMG src="https://static8.depositphotos.com/1431107/919/i/600/depositphotos_9199988-stock-photo-oops-icon.jpg" alt={name} />)}
                        <div>
                            <p><Span>Name: </Span><b>{name}</b></p>
                            <p><Span>Character: </Span>{character}</p>
                        </div>
                    </CastItem>
                )
            })}
        </ul>
    )
}
export default Cast