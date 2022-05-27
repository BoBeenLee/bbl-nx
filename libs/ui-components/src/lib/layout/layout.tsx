import { menus } from '@bbl-nx/constants';
import { dimension, theme } from '@bbl-nx/styles';
import { isBrowser, media } from '@bbl-nx/utils';
import { useState, useEffect, useId } from 'react';
import styled from 'styled-components';
import Footer from '../footer/footer';
import Header from '../header/header';
import BottomPopup from '../popup/bottom-popup/bottom-popup';

export interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  height: 100%;
`;

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

const HeaderGroup = styled.header`
  grid-area: header;
`;

const Content = styled.main`
  grid-area: content;
  margin: 0 auto;
  padding: 20px 20px;
  width: 100%;

  ${media.mobile`
    width: 1px;
    min-width: 100%;
  `}
  ${media.desktop`
    max-width: ${dimension.desktopSize}px;
  `}
`;

const FooterGroup = styled.footer`
  grid-area: footer;
`;

const StatePopup = styled(BottomPopup)<{ isShowStatePopup: boolean }>`
  display: ${({ isShowStatePopup }) => (isShowStatePopup ? 'flex' : 'none')};
  color: ${theme.warning};
`;

export function Layout(props: LayoutProps) {
  const { children } = props;
  const layoutId = useId();
  const [isShowStatePopup, setIsShowStatePopup] = useState(false);

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('offline', () => {
        setIsShowStatePopup(true);
      });
      window.addEventListener('online', () => {
        setIsShowStatePopup(false);
      });
    }
  }, []);

  return (
    <StyledLayout id="outer-container">
      <StatePopup key={layoutId} isShowStatePopup={isShowStatePopup}>
        <span>
          Your computer seems to be offline. We&apos;ll keep trying, but there
          may be a problem with your connection.
        </span>
      </StatePopup>
      <Container>
        <HeaderGroup>
          <Header titles={menus} />
        </HeaderGroup>
        <Content id="page-box">{children}</Content>
        <FooterGroup>
          <Footer />
        </FooterGroup>
      </Container>
    </StyledLayout>
  );
}

export default Layout;
