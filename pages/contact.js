import ContactsLayout from '../components/page-components/contacts/contacts-layout';
import PageTitle from '../components/ui/layout/page-title';
import Head from 'next/head';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Andrea Poltronieri</title>
        <meta
          name="description"
          content="Get in touch with Andrea Poltronieri, Music Information Retrieval researcher at the University of Bologna."
        />
        <meta
          name="keywords"
          content="Andrea Poltronieri contact, email, University of Bologna, music information retrieval researcher"
        />
        <link rel="canonical" href="https://andreapoltronieri.com/contact" />
        <meta property="og:title" content="Contact — Andrea Poltronieri" />
        <meta
          property="og:description"
          content="Get in touch with Andrea Poltronieri, Music Information Retrieval researcher at the University of Bologna."
        />
        <meta property="og:url" content="https://andreapoltronieri.com/contact" />
        <meta property="og:image" content="https://andreapoltronieri.com/images/ap.jpeg" />
      </Head>
      <div className="flex flex-col h-full">
        <PageTitle title={'Contact'} />
        <ContactsLayout />
      </div>
    </>
  );
}

export default Contact;
