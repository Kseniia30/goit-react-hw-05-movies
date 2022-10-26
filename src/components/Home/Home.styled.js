import styled from "styled-components"
import { Link } from "react-router-dom"

const HomeTitle = styled.h1`
    color: red;
    text-shadow: blue 1px 1px 1px, blue 2px 2px 1px;
`

const MainList = styled.ul`
    list-style-type: disclosure-closed;
    font-size: 20px;
`

const MainLink = styled(Link)`
    color: black;
    text-decoration: none;

    :hover,
    :focus-visible {
        color: red;
    }
`

const MainItem = styled.li`
    :not(:last-child) {
        margin-bottom: 5px;
    }
`

export {HomeTitle, MainList, MainLink, MainItem}