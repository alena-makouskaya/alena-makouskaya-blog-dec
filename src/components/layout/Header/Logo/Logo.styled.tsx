import styled from "styled-components";
import { lightTheme } from "../../../../styles/colors";

export const StyledLogo = styled.a`
  display: flex;
  gap: 2px;

  span {
    font-family: "Inter";
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 1.28px;
    text-transform: uppercase;

    color: ${lightTheme.text.textPrimary};
  }

  span:nth-of-type(odd) {
    font-weight: 400;
  }

  span:nth-of-type(even) {
    font-weight: 200;
  }
`;
