import css from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from 'react-use-cart';
import Layout from '../components/Layout';

export default function Cart() {
  const { items, emptyCart, cartTotal } = useCart();

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
          <div>
            <h1>Shopping cart</h1>
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
            <button onClick={emptyCart}>Empty cart</button>
          </div>
          <div>Total Amount: {cartTotal}€</div>{' '}
        </>
      )}
    </Layout>
  );
}
