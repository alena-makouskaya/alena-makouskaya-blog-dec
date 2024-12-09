// @flow
import * as React from "react";
import { HeaderMenuItem, HeaderMenuLink, HeaderMenuList } from "./HeaderMenu.styled";
type Props = {};

export const HeaderMenu = (props: Props) => {
  return (
    <nav>
      <HeaderMenuList>

        <HeaderMenuItem>
          <HeaderMenuLink>Articles</HeaderMenuLink>
        </HeaderMenuItem>

        <HeaderMenuItem>
          <HeaderMenuLink>Case Studies</HeaderMenuLink>
        </HeaderMenuItem>

        <HeaderMenuItem>
          <HeaderMenuLink>About</HeaderMenuLink>
        </HeaderMenuItem>

      </HeaderMenuList>
    </nav>
  );
};
