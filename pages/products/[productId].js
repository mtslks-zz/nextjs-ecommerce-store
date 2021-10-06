import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const singleProductStyle = css`
  font-size: 18px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export default function Product(props) {
  // useRouter function to get information directly from URL
  // const router = useRouter();
  // const { product } = router.query;

  if (typeof window !== 'undefined') {
    console.log(window.localStorage);
  }
  return (
    <Layout>
      <Head>
        <title>Buy {props.singleProduct.name}</title>
      </Head>
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
      <button
        onClick={() => {
          console.log('added to cart');
        }}
      >
        Add to cart ({props.singleProduct.price.amount}{' '}
        {props.singleProduct.price.currency} per item)
      </button>
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
