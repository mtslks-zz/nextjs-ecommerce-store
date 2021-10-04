import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <h2>Product Overview</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={`product-li-${product.id}`}>
              {product.name}:
              <Link href={`/products/${product.name}`}>
                <a>{product.name} Product Page</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
