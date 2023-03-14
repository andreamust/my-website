import ContactsLayout from '../components/page-components/contacts/contacts-layout';
import PageTitle from '../components/ui/layout/page-title';
import BasicWindow from '../components/ui/windows/basic-window';

function Contact(props) {
  return (
    <BasicWindow
      title={'andrea-poltronieri/contacts'}
      width={'50vw'}
      height={'70vh'}
      animate={false}
    >
      <PageTitle title={'Contacts'} />
      <ContactsLayout />
    </BasicWindow>
  );
}

export default Contact;
