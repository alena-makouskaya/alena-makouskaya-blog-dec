import styled from "styled-components";
import { lightTheme } from "../../../../styles/colors";

const StyledHeaderMenu = styled.nav`

`;

export const HeaderMenuList = styled.ul`
  display: flex;
  gap: 32px;
`;

export const HeaderMenuItem = styled.li`

`;

export const HeaderMenuLink = styled.a`
  font-family: "Inter";
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.56px;
  text-transform: uppercase;

  color: ${lightTheme.text.textPrimary};
`;