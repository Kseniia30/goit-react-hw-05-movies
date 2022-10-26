import { MainItem, MainList, MainLink } from "components/Home/Home.styled"
import { useLocation } from "react-router-dom"


const MovieMainList = ({ movieSearchList }) => {
    const location = useLocation()
    return (
        <MainList>
            {movieSearchList.map(movie => {
                return (<MainItem key={movie.id}>
                    <MainLink to={`/movies/${movie.id}`} state={{from: location}}>{movie.original_title}</MainLink></MainItem>)
            })}
        </MainList>
    )
}
export default MovieMainList