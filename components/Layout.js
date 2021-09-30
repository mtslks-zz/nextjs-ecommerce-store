import { css } from '@emotion/react';
import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
