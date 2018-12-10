import Head from 'next/head';

interface Props {
  title: string;
}

const CustomHead: React.FC<Props> = ({ title }) => (
  <Head>
    <title>GymTracker | {title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

export default CustomHead;
