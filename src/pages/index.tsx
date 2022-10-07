import type { NextPage } from 'next';
import Head from 'next/head';
import Exercise from '../components/Exercise';
import { Container } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Form Time!</title>
        <meta name="description" content="IABBB Form Exercise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg">
        <h1>Form Exercise</h1>
        <Exercise />
      </Container>
    </div>
  );
};

export default Home;
