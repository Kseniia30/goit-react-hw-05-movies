import styled from "styled-components"

const SearchForm = styled.form``

const SearchInput = styled.input`
    width: 400px;
    height: 30px;
    color: blue;
    padding-left: 10px;

    :focus-visible {
        outline-color: red;
    }
`

const FormBTN = styled.button`
    margin-left: 20px;
    padding: 10px 20px;
    color: blue;
    box-shadow: blue 1px 1px 1px, blue 2px 2px 1px;
    background-color: red;
    border: none;
    font-weight: 700;
`

export {SearchForm, SearchInput, FormBTN}