import ProjectsLayout from '../../components/page-components/projects/projects-layout';
import fs from 'fs/promises';
import path from 'path';
import PageTitle from '../../components/ui/layout/page-title';
import { Fragment } from 'react/cjs/react.production.min';

function Projects(props) {
  const projects = props;
  return (
    <Fragment>
      <PageTitle title={'Projects'} />
      <ProjectsLayout projects={projects} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const projectsData = await fs.readFile(filePath);
  const data = JSON.parse(projectsData);
  return { props: { projects: data.projects } };
}

export default Projects;
