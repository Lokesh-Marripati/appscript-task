import Head from 'next/head';
import ProductCard from './components/ProductCard';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
    <Head>
    <title>Product Showcase | Appscrip Task</title>
        <meta name="description" content="Explore our wide range of products at unbeatable prices. Shop electronics, fashion, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    <main>
      <h1 className="header">Product Showcase</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
    </>
  );
}
