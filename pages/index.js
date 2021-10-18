import Head from 'next/head';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {' '}
      <Head>
        <title>Welcome to Slow Down Adventures</title>
        <meta
          name="description"
          content="Next.js E-Commerce Project UpLeveled Bootcamp"
        />
      </Head>
      <Hero />
    </Layout>
  );
}
