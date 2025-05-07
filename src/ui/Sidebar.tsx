import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  padding: 1.4rem 2.4rem;
  background-color: var(--color-grey-0);
  border-right: solid 1px var(--color-grey-200);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}
