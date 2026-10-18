import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  gap: 2.4rem;
  justify-content: flex-end;

  @media (max-width: 62em) {
    padding: 0.8rem 2rem;
    order: 1;
    justify-content: space-between;
  }
  @media (max-width: 34em) {
    padding: 1rem 1.2rem;
    gap: 1.2rem;
  }
`;
const LogoWrap = styled.div`
  display: none;

  @media (max-width: 62em) {
    display: block;
    margin-right: auto;

    & img {
      height: 4.8rem;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  @media (max-width: 34em) {
    gap: 1.2rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <Actions>
        <UserAvatar />
        <HeaderMenu />
      </Actions>
    </StyledHeader>
  );
}

export default Header;
