import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/images/symbols/bikelogo.png';
import Logotext from '../public/images/symbols/logotext.png';
import Shoppingcart from '../public/images/symbols/shoppingcart.png';

const navBar = css`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  height: 8vh;
  width: 100vw;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 59, 121, 1) 28%,
    rgba(3, 98, 207, 1) 67%,
    rgba(0, 119, 255, 0.4948354341736695) 100%
  );
  text-transform: uppercase;
  list-style-type: none;
  justify-content: space-around;

  a {
    display: flex;
    text-decoration: none;
    box-sizing: border-box;
    list-style-type: none;
    justify-content: flex;
  }
  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: #dbdbdb;
    text-decoration: none;
    cursor: pointer;
  }
`;

const navWrapper = css`
  display: flex;
  width: 100vw;
  text-decoration: none;
  align-items: center;
`;

export default function Header() {
  return (
    <header>
      <div css={navWrapper}>
        <Link href="/">
          <a>
            <Image src={Logo} alt="Logo" height="70px" width="75px" />
          </a>
        </Link>
        <a>
          <Image src={Logotext} alt="Logo" width="520" height="80" />
        </a>
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
              <Link href="/bikepacking">
                <a>Bikepacking FAQ</a>
              </Link>
            </li>

            <li>
              <a>Items in cart ( ) </a>
            </li>
            <li>
              <Image
                src={Shoppingcart}
                alt="Shopping cart symbol"
                height="40px"
                width="40px"
                color="white"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
