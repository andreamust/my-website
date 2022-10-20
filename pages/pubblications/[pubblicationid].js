import { useRouter } from 'next/router';

function PubblicationPage(props) {
  const router = useRouter();
  const pubblicationId = router.query.pubblicationid;

  return (
    <div>
      <h1>Pubblication ID: {pubblicationId}</h1>
    </div>
  );
}

export default PubblicationPage;
