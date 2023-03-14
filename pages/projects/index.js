import ProjectsLayout from '../../components/page-components/projects/projects-layout';
import BasicWindow from '../../components/ui/windows/basic-window';
import fs from 'fs/promises';
import path from 'path';
import PageTitle from '../../components/ui/layout/page-title';

function Projects(props) {
  const projects = props;
  return (
    <BasicWindow
      title={'andrea-poltronieri/projects'}
      width={'50vw'}
      height={'70vh'}
      animate={false}
    >
      <PageTitle title={'Projects'} />
      <ProjectsLayout projects={projects} />
    </BasicWindow>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const projectsData = await fs.readFile(filePath);
  const data = JSON.parse(projectsData);
  return { props: { projects: data.projects } };
}

export default Projects;
