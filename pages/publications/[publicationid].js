import { useRouter } from 'next/router';

function PublicationPage(props) {
  const router = useRouter();
  const publicationId = router.query.publicationid;

  return (
    <div>
      <h1>Publication ID: {publicationId}</h1>
    </div>
  );
}

export default PublicationPage;
