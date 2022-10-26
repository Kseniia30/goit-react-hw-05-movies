import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Header = styled.header`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: blue;
    margin-bottom: 20px
`

const NavList = styled.ul`
    display: flex;
    list-style: none;
`

const NavListItem = styled.li`
    :not(:last-child) {
        margin-right: 20px
    }
`

const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-weight: 700;

    &.active {
        color: red;
        text-decoration: underline;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: #9e9e9e;
    }
`

export {Header, NavList, NavListItem, StyledNavLink}