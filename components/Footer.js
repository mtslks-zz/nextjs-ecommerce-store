import { css } from '@emotion/react';
import Link from 'next/link';

const footerStyles = css`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  height: 8vh;
  width: 100vw;
  border-bottom: 10px solid white;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 59, 121, 1) 28%,
    rgba(3, 98, 207, 1) 67%,
    rgba(0, 119, 255, 0.4948354341736695) 100%
  );
  list-style-type: none;
  justify-content: space-around;

  a {
    display: flex;
    text-decoration: none;
    box-sizing: border-box;
    list-style-type: none;
    justify-content: flex;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: #dbdbdb;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <Link href="/">
        <a>Terms & Conditions</a>
      </Link>

      <Link href="/">
        <a>Payment & Shipping</a>
      </Link>
      <Link href="/">
        <a>Imprint</a>
      </Link>
      <Link href="/">
        <a>Contact</a>
      </Link>
      <a>© 2021 Mathias Lukas - All Rights Reserved</a>
    </footer>
  );
}
