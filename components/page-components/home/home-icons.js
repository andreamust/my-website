import { FaGithub, FaUniversity, FaLinkedinIn } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import Link from 'next/link';

function HomeIcons() {
  return (
    <div className="flex flex-row justify-center align-middle items-center gap-6 pt-6">
      <Link href={'https://github.com/andreamust'}>
        <a target="_blank" aria-label="Link to GitHub account">
          <FaGithub className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black dark:text-whitepalette" />
        </a>
      </Link>
      {/* <Link href={'https://www.unibo.it/sitoweb/andrea.poltronieri2'}>
        <a target="_blank" aria-label="Link to university webpage">
          <FaUniversity className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black dark:text-whitepalette" />
        </a>
      </Link> */}
      <Link href={'https://www.linkedin.com/in/andrea-poltronieri21'}>
        <a target="_blank" aria-label="Link to LinkedIn account">
          <FaLinkedinIn className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black dark:text-whitepalette" />
        </a>
      </Link>
      <Link
        href={'https://scholar.google.com/citations?user=lmjUSxUAAAAJ&hl=en'}
      >
        <a target="_blank" aria-label="Link to Google Scholar page">
          <SiGooglescholar className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black dark:text-whitepalette" />
        </a>
      </Link>
    </div>
  );
}

export default HomeIcons;
