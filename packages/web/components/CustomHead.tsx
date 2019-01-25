import Head from 'next/head';

interface Props {
  title: string;
}

const CustomHead: React.FC<Props> = ({ title }) => (
  <Head>
    <title>GymTracker | {title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  </Head>
);

export default CustomHead;
