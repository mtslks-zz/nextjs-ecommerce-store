import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Product() {
  const router = useRouter();
  const { product } = router.query;

  console.log(product);

  return (
    <Layout>
      <Head>
        <title>Single Product Page</title>
      </Head>
      <div>Product page {product}</div>
    </Layout>
  );
}
