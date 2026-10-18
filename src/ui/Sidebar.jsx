import styled from "styled-components"
import Logo from './Logo'
import MainNav from './MainNav'

const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);
    grid-row: 1/-1;
    display: flex;
    gap: 3.2rem;
    flex-direction: column;

    @media (max-width: 62em) {
        grid-row: auto;
        order: 3;
        flex-direction: row;
        justify-content: center;
        padding: 0.6rem 1.2rem;
        border-right: none;
        border-top: 1px solid var(--color-grey-100);
        overflow-x: auto;
    }
`

const LogoWrap = styled.div`
    @media (max-width: 62em) {
        display: none;
    }
`
function Sidebar() {
    return (
        <StyledSidebar>
            <LogoWrap>
                <Logo />
            </LogoWrap>
            <MainNav />

        </StyledSidebar>
    )
}

export default Sidebar
