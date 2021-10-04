import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/images/symbols/bikelogo.png';
import Shoppingcart from '../public/images/symbols/shoppingcart.png';

const navBar = css`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100vw;
  gap: 5px;
  background-color: beige;
  padding: 30px;
  margin: 20px;
  text-transform: uppercase;
  border-bottom: 2px dotted #062a06;
  list-style-type: none;
`;

const navWrapper = css`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;

export default function Header() {
  return (
    <header>
      <div css={navWrapper}>
        <div>
          <div css={navWrapper}>
            <Link href="/">
              <a>
                <Image src={Logo} alt="Logo" height="70px" width="80px" />
              </a>
            </Link>
            <h1>Adventure Customizer</h1>
          </div>
          <div>
            <nav>
              <ul css={navBar}>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a>Products</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <Image
              src={Shoppingcart}
              alt="Shopping cart symbol"
              height="50px"
              width="50px"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
