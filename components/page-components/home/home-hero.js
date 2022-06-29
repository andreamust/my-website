import Image from 'next/image';
import { FaGithub, FaUniversity, FaLinkedinIn } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import Link from 'next/link';

function HomeHero(props) {
  return (
    <div className="relative flex flex-col md:grid md:grid-cols-12 justify-center align-middle gap-5 md:gap-0 bg-gray-50 dark:bg-gray-400 md:h-full md:pb-12">
      <div className="flex flex-col justify-center flex-1 items-center md:col-start-3 md:row-start-2 md:col-end-6 md:row-end-3 h-96 w-96 pt-12">
        <div className="h-64 w-64">
          <Image
            src="/images/ap.jpeg"
            alt="logo"
            layout="responsive"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center align-middle items-center md:col-start-6 md:col-end-11 md:row-start-2 md:row-end-3 gap-7">
        <h1 className="font-modernBold text-7xl leading-[3.8rem] text-center ml-9 mr-9 md:ml-0 md:mr-0">
          Andrea Poltronieri
        </h1>
        <h2 className="text-3xl text-center font-modernMono ">
          Personal Website
        </h2>
        <div className="flex flex-row justify-center align-middle items-center gap-6">
          <Link href={'https://github.com/andreamust'}>
            <a target="_blank">
              <FaGithub className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black" />
            </a>
          </Link>
          <Link href={'https://www.unibo.it/sitoweb/andrea.poltronieri2'}>
            <a target="_blank">
              <FaUniversity className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black" />
            </a>
          </Link>
          <Link href={'www.linkedin.com/in/andrea-poltronieri21'}>
            <a target="_blank">
              <FaLinkedinIn className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black" />
            </a>
          </Link>
          <Link
            href={
              'https://scholar.google.com/citations?user=lmjUSxUAAAAJ&hl=en'
            }
          >
            <a target="_blank">
              <SiGooglescholar className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black" />
            </a>
          </Link>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default HomeHero;
