import { FaGithub, FaLinkedinIn, FaOrcid } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import Link from "next/link";

function HomeIcons() {
  return (
    <div className="flex flex-row justify-center align-middle items-center gap-6 pt-6">
      <Link href={"https://github.com/andreamust"} target="_blank" aria-label="Link to GitHub account">
        <FaGithub className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black dark:text-whitepalette" />
      </Link>
      <Link href={"https://orcid.org/0000-0003-3848-7574"} target="_blank" aria-label="Link to ORCID page">
        <FaOrcid className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black dark:text-whitepalette" />
      </Link>
      <Link href={"https://www.linkedin.com/in/andrea-poltronieri21"} target="_blank" aria-label="Link to LinkedIn account">
        <FaLinkedinIn className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black dark:text-whitepalette" />
      </Link>
      <Link
        href={"https://scholar.google.com/citations?user=lmjUSxUAAAAJ&hl=en"}
        target="_blank"
        aria-label="Link to Google Scholar page"
      >
        <SiGooglescholar className="h-8 w-8 cursor-zoom-in drop-shadow-lg text-black dark:text-whitepalette" />
      </Link>
    </div>
  );
}

export default HomeIcons;
