import Head from 'next/head';
import Layout from '../components/Layout';

export default function Gallery() {
  return (
    <Layout>
      <Head>
        <title>Gallery</title>
      </Head>
      <div>
        <h1>Impressions</h1>
      </div>
      <div>Simple table with some pictures</div>
    </Layout>
  );
}
