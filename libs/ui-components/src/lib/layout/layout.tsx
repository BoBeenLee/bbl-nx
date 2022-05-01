import { menus } from "@bbl-nx/constants";
import { dimension, theme } from '@bbl-nx/styles';
import { isBrowser, media } from '@bbl-nx/utils';
import { useEffect } from '@storybook/addons';
import { useState } from 'react';
import styled from 'styled-components';
import Footer from '../footer/footer';
import Header from '../header/header';
import BottomPopup from '../popup/bottom-popup/bottom-popup';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  height: 100%;
`;

const ContainerBox = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

const HeaderBox = styled.header`
  grid-area: header;
`;

const ContentBox = styled.main`
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

const FooterBox = styled.footer`
  grid-area: footer;
`;

const StatePopupBox = styled(BottomPopup)<{ isShowStatePopup: boolean }>`
  display: ${({ isShowStatePopup }) => (isShowStatePopup ? 'flex' : 'none')};
  color: ${theme.warning};
`;

export function Layout(props: LayoutProps) {
  const { children } = props;
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
      <StatePopupBox isShowStatePopup={isShowStatePopup}>
        <span>
          Your computer seems to be offline. We&apos;ll keep trying, but there
          may be a problem with your connection.
        </span>
      </StatePopupBox>
      <ContainerBox>
        <HeaderBox>
          <Header titles={menus} />
        </HeaderBox>
        <ContentBox id="page-box">{children}</ContentBox>
        <FooterBox>
          <Footer />
        </FooterBox>
      </ContainerBox>
    </StyledLayout>
  );
}

export default Layout;
