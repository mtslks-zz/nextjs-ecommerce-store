import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Heroimage from '../public/images/photos/hero_background.jpg';

const heroStyles = css`
  display: flex;
  padding: 20px;
`;

export default function Hero() {
  return (
    <div>
      <div css={heroStyles}>
        <Image src={Heroimage} alt="Hero image" />
      </div>
      <div>
        <h1>
          Welcome to Eternal Cycling - Your #1 Bikepacking Equipment Source
        </h1>
      </div>
    </div>
  );
}
