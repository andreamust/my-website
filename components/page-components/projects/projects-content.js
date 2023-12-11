import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { SiZenodo } from 'react-icons/si';
import { IoIosDocument } from 'react-icons/io';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ProjectsModal from './projects-modal';
import useMobile from '../../utils/mobile';

function ProjectsContent(props) {
  const isMobile = useMobile();

  const projectList = props.projects.projects || []; // Ensure projectList is an array

  const router = useRouter();

  const findOpenProject = () => {
    const project = projectList.projects.find(
      (project) => project.short_title === router.query.project
    );
    return project;
  };

  return (
    <div className="flex flex-col items-center gap-8 mt-5 sm:mt-10">
      {projectList.projects.map((project) => (
        <div
          key={project.short_title}
          className="max-w-2xl w-full mx-auto h-48 border-blackpalette-900 dark:border-lime border-[1.5px] rounded overflow-hidden"
        >
          <div className="flex items-center p-4 h-full">
            <div className="w-36 h-36 flex-shrink-0">
              <Image
                className="object-cover w-full h-full rounded"
                src={project.image}
                alt={`Image of the project ${project.short_title}`}
                width={230}
                height={200}
              />
            </div>
            <div className="flex flex-col flex-grow p-4 ml-5">
              <div className="flex justify-between pb-7">
                <h1 className="text-2xl font-bold text-blackpalette-900 mb-2">
                  <Link href={`/projects/?project=${project.short_title}`}>
                    <a>{project.short_title.replace('_', '.')}</a>
                  </Link>
                </h1>
                {!isMobile && (
                  <h2 className="text-lg font-bold text-blackpalette-900 text-right">
                    {project.title}
                  </h2>
                )}
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <h3 className="text-lg font-bold text-blackpalette-900">
                    {project.year}
                  </h3>
                  <h4 className="text-md font-bold text-blackpalette-900 underline decoration-lime decoration-wavy">
                    {project.type}
                  </h4>
                </div>
                <div className="flex gap-3 pt-4 sm:pt-0">
                  {project.zenodo && (
                    <a
                      href={project.zenodo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 fill-blackpalette-900 dark:fill-whitepalette hover:scale-150 transform transition duration-500 ease-in-out self-center"
                    >
                      <SiZenodo className="w-full h-full" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 fill-blackpalette-900 dark:fill-whitepalette hover:scale-150 transform transition duration-500 ease-in-out self-center"
                    >
                      <BsGithub className="w-full h-full" />
                    </a>
                  )}

                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 fill-blackpalette-900 dark:fill-whitepalette hover:scale-150 transform transition duration-500 ease-in-out self-center"
                    >
                      <IoIosDocument className="w-full h-full" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {router.query.project && (
        <ProjectsModal content={findOpenProject()} router={router} />
      )}
    </div>
  );
}

export default ProjectsContent;
