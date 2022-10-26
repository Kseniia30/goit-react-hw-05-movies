import { MainItem, MainList, MainLink } from "components/Home/Home.styled"
import PropTypes from "prop-types"
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

MovieMainList.propTypes = {
    movieSearchList: PropTypes.array
}