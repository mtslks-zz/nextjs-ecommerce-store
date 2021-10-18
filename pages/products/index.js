import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
                        src={`/images/products/${product.image}`}
                        width="400"
                        height="290"
                        css={css`
                          border-radius: 10px;
                        `}
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
                    <a>Price: {product.price}€</a>
                  </div>
                  <div>
                    {/*  {product.addItem
                      ? 'Product is in your cart'
                      : 'Product is not in your cart'}
                   */}
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
  const { getProducts } = await import('../../util/database');

  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}
