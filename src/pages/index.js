import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <h1>hey ppl</h1>
      {/* Header */}
      <Header />
      <h2></h2>
    </div>
  );
}
