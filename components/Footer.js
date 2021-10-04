import { css } from '@emotion/react';
import Link from 'next/link';

const footerStyles = css`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: beige;
  width: 100vw;
  padding: 10px;
  height: 10vh;
  justify-content: space-around;
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <Link href="/">
        <a>Imprint</a>
      </Link>
      <Link href="/">
        <a>Terms & Conditions</a>
      </Link>
      <Link href="/">
        <a>Contact</a>
      </Link>
      <Link href="/">
        <a>Careers</a>
      </Link>
      <Link href="/">
        <a>Legal</a>
      </Link>
    </footer>
  );
}
