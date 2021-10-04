import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {' '}
      <Head>
        <title>Adventurize Me - Onlineshop</title>
        <meta
          name="description"
          content="Next.js E-Commerce Project UpLeveled Bootcamp"
        />
      </Head>
      <Hero />
      <p />
      <body>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </body>
    </Layout>
  );
}
