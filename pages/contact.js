import ContactsLayout from '../components/page-components/contacts/contacts-layout';
import PageTitle from '../components/ui/layout/page-title';
import Head from 'next/head';

function Contact(props) {
  return (
    (
      <Head>
        <title>Andrea Poltronieri - Contacts</title>
        <meta
          name="description"
          content="Andrea Poltronieri's personal website - Contacts"
        />
        <meta
          name="keywords"
          content="andrea, poltronieri, andrea poltronieri, poltronieri andrea, andrea poltronieri website, poltronieri andrea website, andrea poltronieri personal website, poltronieri andrea personal website, andrea poltronieri personal website, poltronieri andrea personal websi, researcher, unibo, university of bologna, bologna, italy, computer science, computer engineering, software engineering, software developer, software, machine learning, artificial intelligence, ai, ml, data science, data, science, data engineer, data engineering, data scientist, data science, data analytics, data analyst, data analysis, data visualization, data visualisation, data visualizer, semantic web, ontology, linked open data, linked data, rdf, owl, owl2, owl2rl, owl2, music, music information retrieval, music information, music technology, music, computational musicoogy, computational art"
        ></meta>
        <meta name="author" content="Andrea Poltronieri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
    ),
    (
      <div className="flex flex-col h-full">
        <PageTitle title={'Contacts'} />
        <ContactsLayout />
      </div>
    )
  );
}

export default Contact;
