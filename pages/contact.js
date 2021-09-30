import Head from 'next/head';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact us</title>
      </Head>
      <div>You can find us at:</div>
      <div>Musterstraße 31, 1180 Vienna, Austria</div>
    </Layout>
  );
}
