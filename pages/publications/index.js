import fs from "fs/promises";
import path from "path";
import PageTitle from "../../components/ui/layout/page-title";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import Head from "next/head";

const PublicationsLayout = dynamic(
  () =>
    import(
      "../../components/page-components/publications/publications-layout"
    ),
  {
    ssr: false,
  },
);

function Publications(props) {
  const publications = props;
  return (
    <Fragment>
      <Head>
        <title>Publications — Andrea Poltronieri</title>
        <meta
          name="description"
          content="Browse Andrea Poltronieri's academic publications in music information retrieval, semantic web, ontology engineering, and artificial intelligence."
        />
        <meta
          name="keywords"
          content="Andrea Poltronieri publications, music information retrieval, semantic web, ontology, computational musicology, academic papers"
        />
        <link rel="canonical" href="https://andreapoltronieri.com/publications" />
        <meta property="og:title" content="Publications — Andrea Poltronieri" />
        <meta
          property="og:description"
          content="Browse Andrea Poltronieri's academic publications in music information retrieval, semantic web, and artificial intelligence."
        />
        <meta property="og:url" content="https://andreapoltronieri.com/publications" />
        <meta property="og:image" content="https://andreapoltronieri.com/images/ap.jpeg" />
      </Head>
      <PageTitle title={"Publications"} />
      <PublicationsLayout publications={publications} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "publications.json");
  const publicationData = await fs.readFile(filePath);
  const data = JSON.parse(publicationData);
  return { props: { records: data } };
}

export default Publications;
