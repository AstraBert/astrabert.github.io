import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Astra Clelia Bertelli's Profolio."
      />
      <meta
        name="keywords"
        content="astra clelia bertelli, clelia, astra, bioinformatician portfolio, machine learning, astra bertelli portfolio, astra clelia bertelli portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Astra Clelia Bertelli's Profolio." />
      <meta
        property="og:description"
        content="Astra Clelia Bertelli's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://astrabert.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Astra Clelia Bertelli',
};
