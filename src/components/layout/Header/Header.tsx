// @flow
import * as React from "react";
import { StyledHeader } from "./Header.styled";
import { Container } from "../Container/Container.styled";
import { FlexWrapper } from "../FlexWrapper/FlexWrapper.styled";
import { Logo } from "./Logo/Logo";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

type Props = {};
export const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />

          <HeaderMenu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};
