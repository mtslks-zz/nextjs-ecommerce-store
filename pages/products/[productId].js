import Head from 'next/head';
// import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Product(props) {
  // useRouter function to get information directly from URL
  // const router = useRouter();
  // const { product } = router.query;

  return (
    <Layout>
      <Head>
        <title>Single Product Page</title>
      </Head>
      <div>Product page {props.singleProduct.name}</div>
      <div>Price: {props.singleProduct.price}</div>
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
