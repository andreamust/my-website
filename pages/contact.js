import ContactsLayout from '../components/page-components/contacts/contacts-layout';
import PageTitle from '../components/ui/layout/page-title';
import { Fragment } from 'react';

function Contact(props) {
  return (
    <div className="flex flex-col h-full">
      <PageTitle title={'Contacts'} />
      <ContactsLayout />
    </div>
  );
}

export default Contact;
