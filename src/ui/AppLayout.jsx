import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;

  @media (max-width: 62em) {
    order: 2;
    padding: 2.4rem 2rem 4rem;
  }
  @media (max-width: 34em) {
    padding: 1.6rem 1.2rem 3.2rem;
  }
`;
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 62em) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
