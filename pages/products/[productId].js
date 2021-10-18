import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
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
  const [addItem, setAddItem] = useState(getParsedCookie('cartItems') || []);

  const productCookieObj = addItem.find(
    (cookieObj) => cookieObj.id === Number(props.product.id),
  );
  const initialAmount = productCookieObj ? productCookieObj.amount : 0;

  const [addToCart, setAddToCart] = useState(initialAmount);

  function clickAddToCart() {
    // 1.  check current state of cookie
    const currentCookie = getParsedCookie('cartItems') || [];
    // [5,7]
    const isProductAdded = currentCookie.some((cookieObj) => {
      return cookieObj.id === Number(props.product.id);
    });
    let newCookie;
    if (isProductAdded) {
      // remove product
      newCookie = currentCookie.filter(
        (cookieObj) => cookieObj.id !== Number(props.product.id),
      );
    } else {
      // add product
      newCookie = [
        ...currentCookie,
        { id: Number(props.product.id), amount: 0 },
      ];
    }
    // 2.  update state of the cookie (add if it's not there, remove if it's there)
    setParsedCookie('cartItems', newCookie);
    // 3.  update state again
    setAddItem(newCookie);
  }

  function clickItemAmount() {
    // add 1 to amount property per click
    // 1. get old version of array
    const currentCookie = getParsedCookie('cartItems') || [];
    // 2. get the object in array
    const cookieObjFound = currentCookie.find(
      (cookieObj) => cookieObj.id === Number(props.product.id),
    );
    cookieObjFound.amount += 1;
    // 3. set the new version of array
    setParsedCookie('cartItems', currentCookie);
    setAddToCart(cookieObjFound.amount);
  }

  return (
    <Layout>
      <Head>
        <title>Buy {props.product.name}</title>
      </Head>
      <div css={singleProductContainer}>
        <div css={singleProductStyle}>
          <div>
            <strong>
              <em>{props.product.name}</em>
            </strong>
          </div>
          <p />
          <div>{props.product.description}</div>
          <p />
          <div>Price: {props.product.price}€</div>
          <div>
            {' '}
            <Image
              alt={props.product.name}
              src={`/images/products/${props.product.image}`}
              width={400}
              height={290}
              css={css`
                border-radius: 10px;
              `}
            />
          </div>
        </div>
        <div>
          <div>
            <button onClick={clickAddToCart}>
              {addItem.some(
                (cookieObj) => Number(props.product.id) === cookieObj.id,
              )
                ? 'Deactivate'
                : 'Activate'}
            </button>
          </div>
          <button onClick={clickItemAmount}>Add</button>
          <div>Items in cart: {addToCart}</div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getProduct } = await import('../../util/database');

  const product = await getProduct(context.query.productId);

  return {
    props: {
      product,
    },
  };
}
