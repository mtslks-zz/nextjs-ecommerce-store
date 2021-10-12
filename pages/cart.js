import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const cartStyle = css`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  border-bottom: 1px solid black;
  padding: 10px;
  align-items: left;
`;

export default function Cart() {
  const cartTotal = 1;
  return (
    <Layout>
      <Head>
        <title>Shopping cart</title>
      </Head>
      {cartTotal === 0 ? (
        <div>
          <h1>Shopping cart</h1>
          <div>You have no items in your shopping cart.</div>
          <div>
            <Link href="/products">Go back to products page</Link>
          </div>
        </div>
      ) : (
        <>
          <h1>Shopping cart</h1>
          <div css={cartStyle}>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <div>Item: {item.name}</div>
                  <div>Quantity: {item.quantity}</div>
                  <div>Price per item: {item.price}€</div>
                  <div>Total: {item.itemTotal}€</div>
                </div>
              );
            })}
          </div>
          <div>
            Total Amount: <strong>{cartTotal}€</strong>
          </div>{' '}
          <div>
            <button onClick={emptyCart}>Empty cart</button>{' '}
            <button>Checkout</button>
          </div>
        </>
      )}
    </Layout>
  );
}
