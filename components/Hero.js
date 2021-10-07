import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Heroimage from '../public/images/photos/hero_background.jpg';

const heroStyles = css`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`;

export default function Hero() {
  return (
    <div css={heroStyles}>
      <div>
        <Image src={Heroimage} alt="Bike with luggage" />
      </div>

      <h1>SLOW DOWN ADVENTURES - Your #1 Bikepacking Source</h1>

      <div>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </div>
    </div>
  );
}
