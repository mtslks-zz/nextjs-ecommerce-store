import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {' '}
      <Head>
        <title>Onlineshop</title>
        <meta
          name="description"
          content="Next.js E-Commerce Project UpLeveled Bootcamp"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Roll On Bicycles</h1>
    </Layout>
  );
}
