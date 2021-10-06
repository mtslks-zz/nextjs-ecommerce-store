import Head from 'next/head';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Visit us</title>
      </Head>
      <div>
        <h1>You can find us at:</h1>
      </div>
      <div>Slow Down Adventures, Markhofgasse 19, 1030 Vienna, Austria</div>
    </Layout>
  );
}
