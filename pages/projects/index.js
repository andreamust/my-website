import ProjectsLayout from '../../components/page-components/projects/projects-layout';
import BasicWindow from '../../components/ui/windows/basic-window';
import fs from 'fs/promises';
import path from 'path';

function Projects(props) {
  const projects = props;
  return (
    <BasicWindow
      title={'andrea-poltronieri/projects'}
      width={'50vw'}
      height={'70vh'}
      animate={false}
    >
      <div className="bg-inherit bg-slate-400 bg-opacity-30">
        <h1 className="font-modernMono text-4xl leading-[3.8rem] text-left pl-9 pt-3 mb-3 bg-opacity-30">
          Projects
        </h1>
      </div>
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
