import ProjectsContent from './projects-content';

function ProjectsLayout(props) {
  return (
    <div className="flex flex-col w-screen h-screen items-center pt-24 pb-60 overflow-scroll">
      <ProjectsContent projects={props} />
    </div>
  );
}

export default ProjectsLayout;
