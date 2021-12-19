import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <Navbar userName="demo@gmail.com" />
      <Banner
        title="Spiderman"
        subTitle="Far from home"
        imageUrl="https://github.com/kulkarniankita/discover-videos/blob/main/public/static/clifford.webp?raw=true"
      />
      <Card
        imgUrl="https://github.com/kulkarniankita/discover-videos/blob/main/public/static/clifford.webp?raw=true"
        size="large"
      />

      <Card
        imgUrl="https://github.com/kulkarniankita/discover-videos/blob/main/public/static/clifford.webp?raw=true"
        size="medium"
      />

      <Card
        imgUrl="https://github.com/kulkarniankita/discover-videos/blob/main/public/static/clifford.webp?raw=true"
        size="small"
      />
    </div>
  );
}
