import { MdZoomOutMap } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";
import PublicationsModal from "./publications-modal";
import { Fragment } from "react";

function PublicationsContent(props) {
  const publications = props.publications.records;
  const router = useRouter();

  const findOpenPublication = () => {
    return publications.find(
      (publication) => publication.id === router.query.publication
    );
  };

  const loadedYears = [];

  return (
    <div className="flex flex-col items-start gap-10 w-11/12 lg:w-9/12 xl:w-7/12">
      {[...publications].reverse().map((publication) => {
        const output = publication._bibliography || "";
        const year = publication.issued?.["date-parts"]?.[0]?.[0];
        const title = publication.title;
        const splitCitation = output.split("Poltronieri, A.");
        const splitTitle = splitCitation[1]?.split(title) || ["", ""];
        return (
          <Fragment key={publication.id}>
            {loadedYears.includes(year)
              ? ""
              : loadedYears.push(year) && (
                  <h2 className="text-2xl self-center font-bold circle-sketch-highlight">
                    {year}
                  </h2>
                )}
            <div className="flex flex-row gap-7 items-center">
              <Link href={"/publications/?publication=" + publication.id}>
                <MdZoomOutMap className="w-6 h-6 fill-cerise hover:scale-150 transform transition duration-500 ease-in-out" />
              </Link>
              <p className="font-modern">
                {splitCitation[0]}
                <span className="font-modernBold text-blackpalette-900 dark:text-whitepalette underline decoration-wavy decoration-lime decoration-2">
                  {" "}
                  Poltronieri, Andrea
                </span>
                {splitTitle[0]}
                <span className="font-modernBold">{title}</span>
                {splitTitle[1]}
              </p>
            </div>
          </Fragment>
        );
      })}
      {router.query.publication && (
        <PublicationsModal content={findOpenPublication()} router={router} />
      )}
    </div>
  );
}

export default PublicationsContent;
