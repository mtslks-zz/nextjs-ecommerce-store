import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Typed from 'react-typed';
import Heroimage from '../public/images/photos/hero_background.jpg';

const heroStyles = css`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

export default function Hero() {
  return (
    <div>
      <div>
        <h1 css={heroStyles}>
          <Typed
            strings={[
              'Slow Down Adventures - Your #1 Source For Gear',
              'Slow Down Adventures - Your #1 Source For Bikes',
              'Slow Down Adventures - Online Shop',
            ]}
            typeSpeed={40}
            backSpeed={70}
            loop
            smartBackspace
            shuffle={false}
            backDelay={1}
            fadeOut={false}
            fadeOutDelay={100}
            loopCount={1}
            showCursor
            cursorChar=" >>"
          />
        </h1>
      </div>

      <div css={heroStyles}>
        <div>
          <Link passHref href="/products" cursor="pointer">
            <Image src={Heroimage} alt="Bike with luggage" />
          </Link>
        </div>
      </div>
    </div>
  );
}
