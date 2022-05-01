import { theme } from '@bbl-nx/styles';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MenuItemProps {
  name: string;
  url: string;
}

const StyledMenuItem = styled.div`
  padding: 10px 0;
`;

const MenuLink = styled.a``;

const MenuLinkText = styled.span`
  color: ${theme.primary};
  text-decoration: none;
  &:hover {
    color: ${theme.secondary};
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

MenuItem.defaultProps = {
  name: 'Home',
  url: '/',
};

export default MenuItem;
