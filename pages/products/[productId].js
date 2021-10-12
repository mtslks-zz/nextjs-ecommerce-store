import { css } from '@emotion/react';
import { get } from 'http';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

export const singleProductContainer = css`
  width: 50vw;

  background-color: #ecf6ff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
  display: flex;
`;
const singleProductStyle = css`
  font-size: 18px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export default function Product(props) {
  const [addItem, setAddItem] = useState(getParsedCookie('addItem') || []);

  function clickHandler() {
    // 1.  check current state of cookie
    const currentCookie = getParsedCookie('addItem');
    // [5,7]
    const isProductAdded = currentCookie.some((id) => {
      return id === Number(props.singleProduct.id);
    });
    let newCookie;
    if (isProductAdded) {
      // remove product
      newCookie = currentCookie.filter(
        (id) => id !== Number(props.singleProduct.id),
      );
    } else {
      // add product
      newCookie = [...currentCookie, Number(props.singleProduct.id)];
    }
    // 2.  needs to update state of the cookie (add if it's not there, remove if it's there)
    setParsedCookie('addItem', newCookie);
    // 3.  needs to update state
    setAddItem(newCookie);
  }

  if (typeof window !== 'undefined') {
    console.log(window.localStorage);
  }
  return (
    <Layout>
      <Head>
        <title>Buy {props.singleProduct.name}</title>
      </Head>
      <div css={singleProductContainer}>
        <div css={singleProductStyle}>
          <div>
            <strong>
              <em>{props.singleProduct.name}</em>
            </strong>
          </div>
          <p />
          <div>{props.singleProduct.desc}</div>
          <p />
          <div>
            Price: {props.singleProduct.price.amount}{' '}
            {props.singleProduct.price.currency}{' '}
          </div>
          <div>
            {' '}
            <Image
              alt={props.singleProduct.name}
              src={props.singleProduct.img}
              width={400}
              height={290}
              css={css`
                border-radius: 10px;
              `}
            />
          </div>
        </div>
        <div>
          <button onClick={clickHandler}>
            {addItem.some((id) => Number(props.singleProduct.id) === id)
              ? 'Added to cart'
              : 'Add to cart'}
          </button>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { products } = await import('../../util/database');
  const idFromUrl = context.query.productId;

  const singleProduct = products.find((product) => {
    return idFromUrl === product.id;
  });

  console.log(singleProduct);
  return {
    props: {
      singleProduct,
    },
  };
}
