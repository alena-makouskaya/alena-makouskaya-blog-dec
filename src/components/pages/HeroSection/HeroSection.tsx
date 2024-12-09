// @flow
import * as React from "react";
import { Container } from "../../layout/Container/Container.styled";
import { FlexWrapper } from "../../layout/FlexWrapper/FlexWrapper.styled";
import { HeroDescription, HeroLabel, HeroTitle, StyledHeroSection } from "./HeroSection.styled";
type Props = {};

export const HeroSection = (props: Props) => {
  return (
    <StyledHeroSection>
      <Container>
        <FlexWrapper direction="column">
          <HeroLabel>about this blog</HeroLabel>
          <HeroTitle>
            {" "}
            Articles on Software Engineering,
            <br />
            Product Development, UX/UI Design, and more
          </HeroTitle>

          <HeroDescription>
            The branding process includes six crucial phases that need to be
            undertaken to boost a business. Dive into our guide to get an utter
            understanding of them.
          </HeroDescription>
        </FlexWrapper>
      </Container>
    </StyledHeroSection>
  );
};
