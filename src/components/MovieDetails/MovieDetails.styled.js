import styled from "styled-components"
import {NavLink} from "react-router-dom"

const BackBTN = styled.button`
    margin-bottom: 10px;
    padding: 5px 30px;
    color: blue;
    box-shadow: blue 1px 1px 1px, blue 2px 2px 1px;
    background-color: red;
    border: none;
    font-weight: 700;
`

const MainDetailsBox = styled.div`
    display: flex;
`

const MainDetailsIMG = styled.img`
    width: 200px;
`

const TextDetailsBox = styled.div`
    margin-left: 20px;
`

const Title = styled.h2`
    color: red;
    text-shadow: blue 1px 1px 1px, blue 2px 2px 1px;
`

const Text = styled.p``

const TopText = styled.h3`
    color: black;
    text-shadow: red 1px 1px 1px, red 2px 2px 1px;
`
const Span = styled.span`
    color: black;
    text-shadow: red 1px 1px 1px, red 2px 2px 1px;
`

const AdditionalNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 700;
    color: blue;

    &.active {
        color: red;
        text-decoration: underline;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: #9e9e9e;
    }
`
const CastIMG = styled.img`
    width: 200px;
    height: auto;
    margin-right: 20px
`

const CastItem = styled.li`
    display: flex;

    :not(:last-child) {
        margin-bottom: 20px;
    }
`

const AdditionalReviewsContent = styled.p`
    text-align: justify;
`

export {BackBTN, MainDetailsBox, MainDetailsIMG, TextDetailsBox, Title, Text, TopText, Span, AdditionalNavLink, CastItem, CastIMG, AdditionalReviewsContent}