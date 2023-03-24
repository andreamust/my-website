import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ProjectsModal from './projects-modal';

function ProjectsContent(props) {
  const projects = props.projects;
  const projectList = projects.projects;

  const router = useRouter();

  const findOpenProject = () => {
    const project = projects.find(
      (project) => project.id === router.query.project
    );
    return project;
  };

  return (
    <div className="flex flex-col items-center gap-14">
      {projectList.projects.map((project) => (
        <div
          key={project.short_title}
          className="flex flex-col border-gray-900 w-10/12 h-full border-2"
        >
          <div className="flex flex-row items-center p-4">
            <Image
              className="flex-1"
              src={project.image}
              width={230}
              height={200}
              alt={`image of the project ${project.short_title}`}
            />
            <div className="flex flex-col items-center justify-between w-full h-full">
              <div className="flex flex-row items-center justify-between p-4 w-full">
                <h1 className="text-3xl font-modernBold text-gray-800 text-center pl-10">
                  <Link href={'/projects/?project=' + project.short_title}>
                    <a>{project.short_title}</a>
                  </Link>
                </h1>
                <h2 className="text-xl font-modernMono text-gray-800 text-right">
                  {project.title}
                </h2>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <h3 className="flex-1 basis-1/3 text-xl font-modernMono text-gray-800 text-center">
                  {project.year}
                </h3>
                <h4 className="flex-1 basis-1/3 text-lg font-modernMono text-gray-800 text-center">
                  {project.type}
                </h4>
                <div className="flex-1 basis-1/3 h-full">
                  <Link href={project.link}>
                    <a className="flex flex-col">
                      <BsGithub className="self-center w-7 h-7" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {router.query.pubblication && (
        <ProjectsModal content={findOpenProject()} router={router} />
      )}
    </div>
  );
}

export default ProjectsContent;
