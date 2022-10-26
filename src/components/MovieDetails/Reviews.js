import { fetchReviews } from "fetch/fetchReviews"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { AdditionalReviewsContent, Span } from "./MovieDetails.styled"

const Reviews = () => {
    const { movieId } = useParams()
    const [movieReview, setMovieReview] = useState(null)
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            fetchReviews(movieId).then(setMovieReview)
        }
        isFirstRender.current = false
    }, [movieId])

    if (!movieReview) {
        return null
    }

    return (
            movieReview.data.results.length !== 0 ?
                (<ul>
                    {movieReview.data.results.map(review => {
                        const {author, content, id} = review
                        return (
                            <li key={id}>
                                <p><Span>Author:</Span> {author}</p>
                                <AdditionalReviewsContent>{content}</AdditionalReviewsContent>
                            </li>
                        )
                    })}</ul>) 
                    : (<p>There is no review</p>)       
    )
}

export default Reviews 