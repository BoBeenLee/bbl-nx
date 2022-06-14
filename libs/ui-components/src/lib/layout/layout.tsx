import { menus } from '@bbl-nx/constants';
import { dimension } from '@bbl-nx/styles';
import { media } from '@bbl-nx/utils';
import styled from 'styled-components';
import Footer from '../footer/footer';
import Header from '../header/header';
export interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  height: 100vh;
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

export function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <StyledLayout id="outer-container">
      {/* <StatePopup key={layoutId} isShowStatePopup={isShowStatePopup}>
        <span>
          Your computer seems to be offline. We&apos;ll keep trying, but there
          may be a problem with your connection.
        </span>
      </StatePopup> */}
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
