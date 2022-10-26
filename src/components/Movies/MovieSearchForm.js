import { FormBTN, SearchForm, SearchInput } from "./Movies.styled"

const MovieSearchForm = ({submitInfo}) => {
    return (
            <SearchForm onSubmit={submitInfo}>
                <SearchInput type="text" autoComplete="true" autoFocus name="movie"/>
                <FormBTN type="submit">Search</FormBTN>
            </SearchForm>
    )
}
export default MovieSearchForm