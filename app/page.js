import Head from 'next/head';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import Discover from './components/Discover';
import Footer from './components/Footer';

export default async function Home() {
  return (
    <>
      <Head>
        <title>Product Showcase | Appscrip Task</title>
        <meta 
          name="description" 
          content="Discover our exclusive collection of products. Shop for electronics, fashion, and more at unbeatable prices." 
        />
        <meta name="keywords" content="Products, Shopping, Electronics, Fashion, Affordable, Appscrip" />
        <meta name="author" content="Appscrip Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Product Showcase | Appscrip Task" />
        <meta 
          property="og:description" 
          content="Explore our wide range of products at unbeatable prices. Shop electronics, fashion, and more." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourdomain.com/" />
        <meta property="og:image" content="https://www.yourdomain.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Discover />
      <ProductPage />
      <Footer />
    </>
  );
}
