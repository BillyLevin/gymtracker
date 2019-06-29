import Head from 'next/head';
import React from 'react';
import Homepage from '../components/Homepage';
import { skipIfAuth } from '../hocs/skipIfAuth';

const IndexPage: React.FC = () => (
  <>
    <Head>
      <title>GymTracker</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="../static/favicon.ico" key="favicon" />
    </Head>
    <Homepage />
  </>
);

export default skipIfAuth(IndexPage);
