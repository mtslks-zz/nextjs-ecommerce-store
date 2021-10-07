import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { CartProvider, useCart } from 'react-use-cart';
import Layout from '../../components/Layout';
import ShoppingcartButton from '../../public/images/symbols/shoppingcart_add.png';

const singleProductContainer = css`
  background-color: #ecf6ff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const contentWrap = css`
  margin: 0 auto;
  padding: 20px 20px;
  text-align: center;
`;

const contentGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1.5rem;
  a {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 5px;
  }
`;

const productHeader = css`
  text-align: left;
  margin-bottom: 20px;
  align-items: center;
  a {
    text-decoration: none;
    color: navy;
  }
`;

export default function Products(props) {
  return (
    <Layout>
      <div>
        <div css={contentWrap}>
          <Head>
            <title>Products</title>
          </Head>
          <div css={productHeader}>
            <h2>Our Products</h2>
            Please choose from our wide range of bikepacking equipment below.
            <p />
            Click the{' '}
            <Image
              src={ShoppingcartButton}
              alt="Shopping cart symbol"
              height="20px"
              width="20px"
            />{' '}
            symbol to add 1 single item of the product to your shopping cart.
            <p />
            Contact us at{' '}
            <a href="mailto:info@slowdownadventures.com">
              info@slowdownadventures.com
            </a>{' '}
            if you need support.
          </div>
          <div css={contentGrid}>
            {props.products.map((product) => {
              return (
                <div
                  key={`product-li-${product.id}`}
                  css={singleProductContainer}
                >
                  <div>
                    <a href={`/products/${product.id}`}>
                      <Image
                        alt={product.name}
                        src={product.img}
                        width="400"
                        height="290"
                      />
                    </a>
                    <Link href={`/products/${product.id}`}>
                      <a
                        css={css`
                          font-weight: bold;
                        `}
                      >
                        {product.name}
                      </a>
                    </Link>
                    <a>
                      Price: {product.price.amount} {product.price.currency}
                    </a>
                  </div>
                  <div>
                    <Image
                      src={ShoppingcartButton}
                      alt="Shopping cart symbol add"
                      height="25px"
                      width="25px"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { products } = await import('../../util/database');
  return {
    props: {
      products,
    },
  };
}
