import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// Read in env variables in .env file, making it
// possible to connect to PostgreSQL
dotenvSafe.config();

// connect to PostgreSQL
const sql = postgres();

export async function getProducts() {
  const products = await sql`
  SELECT * FROM products;
  `;
  return products.map((product) => {
    return camelcaseKeys(product);
  });
}

export async function getProduct(id) {
  const products = await sql`
  SELECT
    *
  FROM
    products
  WHERE
    id=${id}
  `;
  return camelcaseKeys(products[0]);
}
