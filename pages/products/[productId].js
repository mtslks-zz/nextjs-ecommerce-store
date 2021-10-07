import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useCart } from 'react-use-cart';
// import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export const singleProductContainer = css`
  width: 50vw;

  background-color: #ecf6ff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
`;
const singleProductStyle = css`
  font-size: 18px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export default function Product(props) {
  // useRouter function to get information directly from URL
  // const router = useRouter();
  // const { product } = router.query;

  const { addItem } = useCart();

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
          <div>{props.singleProduct.name}</div>
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
            />
          </div>
        </div>
        <div>
          <button
            onClick={() =>
              addItem({
                name: props.singleProduct.name,
                id: props.singleProduct.id,
                price: props.singleProduct.price.amount,
              })
            }
          >
            Add to cart
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
