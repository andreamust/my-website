import ProjectsContent from './projects-content';

function ProjectsLayout(props) {
  return (
    <div className="flex flex-col items-center pt-20 pb-32">
      <ProjectsContent projects={props} />;
    </div>
  );
}

export default ProjectsLayout;
