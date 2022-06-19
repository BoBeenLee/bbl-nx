import { getThemeProps } from '@bbl-nx/styles';
import styled from 'styled-components';

export interface MenuItemProps {
  name: string;
  url: string;
}

const StyledMenuItem = styled.div`
  padding: 10px 0;
`;

const MenuLink = styled.a``;

const MenuLinkText = styled.span`
  color: ${getThemeProps("primary")};
  text-decoration: none;
  &:hover {
    color: ${getThemeProps("secondary")};
  }
`;

export function MenuItem(props: MenuItemProps) {
  const { name, url } = props;
  return (
    <StyledMenuItem>
      <MenuLink href={url}>
        <MenuLinkText>{name}</MenuLinkText>
      </MenuLink>
    </StyledMenuItem>
  );
}

export default MenuItem;
