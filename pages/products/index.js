import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Products(props) {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <h2>Product Overview</h2>
      <ul>
        {props.products.map((product) => {
          return (
            <li key={`product-li-${product.id}`}>
              {product.name}:
              <Link href={`/products/${product.id}`}>
                <a>{product.name} Product Page</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { products } = await import('../../util/database');

  console.log(products);
  return {
    props: {
      products,
    },
  };
}
