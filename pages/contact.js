import ContactsLayout from '../components/page-components/contacts/contacts-layout';
import BasicWindow from '../components/ui/windows/basic-window';

function Contact(props) {
  return (
    <BasicWindow
      title={'andrea-poltronieri/contacts'}
      width={'50vw'}
      height={'70vh'}
      animate={false}
    >
      <ContactsLayout />
    </BasicWindow>
  );
}

export default Contact;
