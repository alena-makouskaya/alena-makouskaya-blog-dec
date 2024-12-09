import styled from "styled-components";
import { lightTheme } from "../../../styles/colors";

export const StyledHeroSection = styled.section`
    padding: 80px 0;
`


export const HeroLabel = styled.span`
  font-family: "Inter";
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0.56px;
  text-transform: uppercase;

  color: ${lightTheme.text.textTertiary};
`;

export const HeroTitle = styled.h1`
  font-family: "Inter";
  font-size: 40px;
  line-height: 48px;
  font-weight: 800;
  letter-spacing: 0.4px;

  color: ${lightTheme.text.textPrimary};

  margin: 8px 0 24px;
`;

export const HeroDescription = styled.p`
  font-family: "Inter";
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0.4px;

  color: ${lightTheme.text.textSecondary};
`;