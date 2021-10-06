import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import SearchBar from '../../components/Searchbar';
import ShoppingcartButton from '../../public/images/symbols/shoppingcart_add.png';

const contentWrap = css`
  margin: 0 auto;
  padding: 20px 20px;
  text-align: center;
`;

const contentGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem;
  a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: #000;
    padding: 10px;
  }
  button {
    font-size: 20px;
    margin: 4px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;

// export default function Products({ products }) {

export default function Products(props) {
  /*   const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  function searchFunction(e) {
    setSearch(e.target.value);
    setFilter('active');
  }
  <SearchBar products={products} searchFunction={searchFunction} />
  {product
    .filter((product) => {
      if (filter === 'active') {
        return product.name.toLowerCase().includes(search.toLowerCase());
      } else {
        return true;
      }
    })

  .map((product) => { */
  return (
    <Layout>
      <div>
        <div css={contentWrap}>
          <Head>
            <title>Products</title>
          </Head>
          <h2
            css={css`
              text-align: left;
            `}
          >
            Product Overview
          </h2>
          <div css={contentGrid}>
            {props.products.map((product) => {
              return (
                <div key={`product-li-${product.id}`}>
                  <a href={`/products/${product.id}`}>
                    <Image
                      alt={product.name}
                      src={product.img}
                      width="400"
                      height="290"
                    />
                  </a>
                  <Link href={`/products/${product.id}`}>
                    <a
                      css={css`
                        font-weight: bold;
                      `}
                    >
                      {product.name}
                    </a>
                  </Link>
                  <a>
                    Price: {product.price.amount} {product.price.currency}
                  </a>
                  <Image
                    src={ShoppingcartButton}
                    alt="Shopping cart symbol add"
                    height="25px"
                    width="25px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { products } = await import('../../util/database');

  return {
    props: {
      products,
    },
  };
}
