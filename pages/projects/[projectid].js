import { useRouter } from 'next/router';

function ProjectPage(props) {
  const router = useRouter();
  const projectId = router.query.projectd;
  return <div>Project ID : {projectId}</div>;
}

export default ProjectPage;
