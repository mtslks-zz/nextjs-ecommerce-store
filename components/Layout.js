import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const layoutStyle = css`
  font-family: 'Arial';
`;

export default function Layout(props) {
  return (
    <div css={layoutStyle}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
