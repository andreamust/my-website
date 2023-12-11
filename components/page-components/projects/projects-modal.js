import BasicWindow from '../../ui/windows/basic-window';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiZenodo } from 'react-icons/si';
import { IoIosDocument } from 'react-icons/io';

function ProjectsModal(props) {
  const { content, router } = props;

  return (
    <BasicWindow
      title={content.short_title.replace('_', '.')}
      width="w-[80%]"
      height="h-[70%]"
      animate={true}
      closePath="/projects/"
      onClose={() => {
        router.push('/projects/');
      }}
    >
      <div className="flex flex-col gap-5 w-full p-12 overflow-scroll scroll-smooth no-scrollbar">
        <h1 className="text-2xl font-modernBold underline decoration-wavy dark:text-blackpalette-900 decoration-lime decoration-2">
          {content.title}
        </h1>
        <h3 className="text-xl font-modernBold">Year</h3>
        <p className="text-md font-modern dark:text-blackpalette-900">
          {content.year}
        </p>
        <h3 className="text-xl font-modernBold">Descritpion</h3>
        <p className="text-md font-modern dark:text-blackpalette-900">
          {content.description}
        </p>
        <h3 className="text-xl font-modernBold">Links</h3>
        <div className="flex flex-row gap-5">
          {content.link && (
            <p className="text-md font-modern">
              <Link href={content.link}>
                <a target="_blank" aria-label="Link to project">
                  <FaGithub className="h-10 w-10 drop-shadow-lg dark:text-lime text-cerise" />
                </a>
              </Link>
            </p>
          )}
          {content.paper && (
            <Link href={content.paper}>
              <a target="_blank" aria-label="Link to paper">
                <IoIosDocument className="h-10 w-10 drop-shadow-lg dark:text-lime text-cerise" />
              </a>
            </Link>
          )}
          {content.zenodo && (
            <Link href={content.zenodo}>
              <a target="_blank" aria-label="Link to data">
                <SiZenodo className="h-12 w-12 drop-shadow-lg dark:text-lime text-cerise" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </BasicWindow>
  );
}

export default ProjectsModal;
