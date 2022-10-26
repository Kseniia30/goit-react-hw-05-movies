import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header, NavList, NavListItem, StyledNavLink } from "./Layout.styled"

const LayOut = () => {
    return (
        <>
            <Header>
                <nav>
                    <NavList>
                        <NavListItem>
                            <StyledNavLink to="/" end>Home</StyledNavLink>
                        </NavListItem>
                        <NavListItem>
                            <StyledNavLink to="/movies">Movies</StyledNavLink>
                        </NavListItem>
                    </NavList>
                </nav>
            </Header>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            
        </>
    )
}

export default LayOut