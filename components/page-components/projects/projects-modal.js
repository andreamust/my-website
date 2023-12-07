import BasicWindow from '../../ui/windows/basic-window';
import Image from 'next/image';
import Link from 'next/link';

function ProjectsModal(props) {
  const { content, router } = props;

  return (
    <BasicWindow
      title={content.short_title}
      width="w-[70%]"
      height="h-[60%]"
      animate={true}
      closePath="/projects/"
      onClose={() => {
        router.push('/projects/');
      }}
    >
      <div className="flex flex-col gap-5 w-full p-12 overflow-scroll scroll-smooth no-scrollbar">
        <h1 className="text-2xl font-modernBold">{content.title}</h1>
        <div className="w-full h-full items-center">
          <Image src={content.image} width={400} height={400} quality={100} />
        </div>
        <h3 className="text-xl font-modernBold">Year</h3>
        <p className="text-md font-modern">{content.year}</p>
        <h3 className="text-xl font-modernBold">Descritpion</h3>
        <p className="text-md font-modern">{content.description}</p>
        <h3 className="text-xl font-modernBold">Repository</h3>
        <Link href={content.link}>
          <p className="text-md font-modernMono">
            <a>{content.link}</a>
          </p>
        </Link>
      </div>
    </BasicWindow>
  );
}

export default ProjectsModal;
