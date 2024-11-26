import { MdZoomOutMap } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";
import PubblicationsModal from "./pubblications-modal";
import { Fragment } from "react";
import renderCitation from "../../utils/process-pubblications";

function PubblicationsContent(props) {
  const pubblications = props.pubblications.records;
  const router = useRouter();

  const findOpenPubblication = () => {
    const pubblication = pubblications.find(
      (pubblication) => pubblication.id === router.query.pubblication
    );
    return pubblication;
  };

  const loadedYears = [];

  return (
    <div className="flex flex-col items-start gap-10 w-10/12 md:w-7/12">
      {[...pubblications].reverse().map((pubblication) => {
        let { output, data } = renderCitation(pubblication, "bibliography");
        const year = data.issued["date-parts"][0][0];
        const title = data.title;
        // string pre-processing
        const splitCitation = output.split("Poltronieri, A.");
        const splitTitle = splitCitation[1].split(title);
        return (
          <Fragment key={data.id}>
            {loadedYears.includes(year)
              ? ""
              : loadedYears.push(year) && (
                  <h2 className="text-2xl self-center font-bold circle-sketch-highlight">
                    {year}
                  </h2>
                )}
            <div className="flex flex-row gap-7 items-center">
              <Link href={"/pubblications/?pubblication=" + data.id}>
                <a>
                  <MdZoomOutMap
                    //zoom on hover and animate on click
                    className="w-6 h-6 fill-cerise hover:scale-150 transform transition duration-500 ease-in-out"
                  />
                </a>
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
      {router.query.pubblication && (
        <PubblicationsModal content={findOpenPubblication()} router={router} />
      )}
    </div>
  );
}

export default PubblicationsContent;
