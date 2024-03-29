import Layout from '../components/ui/layout/layout';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Head>
        <title>Andrea Poltronieri Website</title>
        <meta
          name="description"
          content="Andrea Poltronieri's personal website"
        />
        <meta
          name="keywords"
          content="andrea, poltronieri, andrea poltronieri, poltronieri andrea, andrea poltronieri website, poltronieri andrea website, andrea poltronieri personal website, poltronieri andrea personal website, andrea poltronieri personal website, poltronieri andrea personal websi, researcher, unibo, university of bologna, bologna, italy, computer science, computer engineering, software engineering, software developer, software, machine learning, artificial intelligence, ai, ml, data science, data, science, data engineer, data engineering, data scientist, data science, data analytics, data analyst, data analysis, data visualization, data visualisation, data visualizer, semantic web, ontology, linked open data, linked data, rdf, owl, owl2, owl2rl, owl2, music, music information retrieval, music information, music technology, music, computational musicoogy, computational art"
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Andrea Poltronieri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="images/favicon.ico" />
        <link rel="apple-touch-icon" href="images/favicon.ico" />
        <meta property="og:title" content="Andrea Poltronieri" />
        <meta
          property="og:description"
          content="Andrea Poltronieri's personal website"
        />
        <meta property="og:image" content="images/favicon.ico" />
        <meta property="og:url" content="https://andreapoltronieri.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@andpoltronieri" />
        <meta name="twitter:creator" content="@andpoltronieri" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
