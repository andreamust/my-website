import Layout from '../components/ui/layout/layout';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrea Poltronieri',
  url: 'https://andreapoltronieri.com',
  jobTitle: 'Music Information Retrieval Researcher',
  worksFor: {
    '@type': 'Organization',
    name: 'University of Bologna',
    url: 'https://www.unibo.it',
  },
  sameAs: [
    'https://github.com/andreamust',
    'https://orcid.org/0000-0003-3848-7574',
    'https://www.linkedin.com/in/andrea-poltronieri21',
    'https://scholar.google.com/citations?user=lmjUSxUAAAAJ&hl=en',
  ],
  knowsAbout: [
    'Music Information Retrieval',
    'Computational Musicology',
    'Semantic Web',
    'Ontology Engineering',
    'Machine Learning',
    'Artificial Intelligence',
  ],
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Andrea Poltronieri" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <meta property="og:site_name" content="Andrea Poltronieri" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@andpoltronieri" />
        <meta name="twitter:creator" content="@andpoltronieri" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
