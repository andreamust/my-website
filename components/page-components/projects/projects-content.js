import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

function ProjectsContent(props) {
  const projects = props.projects;
  const projectList = projects.projects;
  return (
    <div className="flex flex-col items-center gap-14">
      {projectList.projects.map((project) => (
        <div
          key={project.short_title}
          className="flex flex-col border-gray-900 w-10/12 h-full border-2"
        >
          <div className="flex flex-row items-center justify-between p-4">
            <h1 className="text-3xl font-modernBold text-gray-800 text-center">
              {project.short_title}
            </h1>
            <h2 className="text-xl font-modernMono text-gray-800 text-right">
              {project.title}
            </h2>
          </div>
          <div className="flex flex-row items-center justify-between pl-10 pr-10">
            <h3 className="flex-1 text-xl font-modernMono text-gray-800 text-center">
              {project.year}
            </h3>
            <h4 className=" flex-1 text-xl font-modernMono text-gray-800 text-right">
              {project.type}
            </h4>
            <Link href={project.link} className="flex-1 basis-10">
              <div className="flex flex-row ">
                <BsGithub className="w-10 align-middle" />
                <p className="flex-1 text-md font-modernMono text-gray-800 text-right">
                  Repository
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsContent;
