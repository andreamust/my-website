import BasicWindow from "../../ui/windows/basic-window";
import renderCitation from "../../utils/process-pubblications";
import { useState } from "react";
import useMobile from "../../utils/mobile";
import Head from "next/head";

function PubblicationsModal(props) {
  const mobile = useMobile();
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(citation).then(
      () => {
        setCopySuccess("Copied!");
      },
      () => {
        setCopySuccess("Failed to copy!");
      }
    );
  };
  const { content, router } = props;
  const authorList = content.author.map(
    (author) => author.family + " " + author.given
  );

  const generateCitation = (format) => {
    setCitation("");
    setSelectedFormat(format);
    const { output } = renderCitation(content, format);
    return output;
  };

  let [citation, setCitation] = useState();

  const [selectedFormat, setSelectedFormat] = useState("");

  const baseBtn =
    "text-lg font-bold py-2 px-4 rounded transition-colors duration-200";
  const formatBtn = (format) =>
    `${baseBtn} ${
      selectedFormat === format
        ? "bg-cerise text-whitepalette"
        : "bg-lime text-blackpalette-900 hover:bg-cerise hover:text-whitepalette active:bg-blackpalette-900"
    }`;

  return (
    (
      <Head>
        <title>{content.id} | Andrea Poltronieri</title>
        <meta
          name="description"
          content="Andrea Poltronieri's personal website - Pubblications"
        />
        <meta
          name="keywords"
          content="andrea, poltronieri, andrea poltronieri, poltronieri andrea, andrea poltronieri website, poltronieri andrea website, andrea poltronieri personal website, poltronieri andrea personal website, andrea poltronieri personal website, poltronieri andrea personal websi, researcher, unibo, university of bologna, bologna, italy, computer science, computer engineering, software engineering, software developer, software, machine learning, artificial intelligence, ai, ml, data science, data, science, data engineer, data engineering, data scientist, data science, data analytics, data analyst, data analysis, data visualization, data visualisation, data visualizer, semantic web, ontology, linked open data, linked data, rdf, owl, owl2, owl2rl, owl2, music, music information retrieval, music information, music technology, music, computational musicoogy, computational art"
        ></meta>
        <meta name="author" content="Andrea Poltronieri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="images/favicon.ico" />
        <meta name="citation_title" content={content.title} />
        <meta name="citation_author" content={authorList.join(", ")} />
        <meta name="citation_publication_date" content={content.year} />
        <meta
          name="citation_journal_title"
          content={content["container-title"]}
        />
        <meta name="citation_abstract" content={content.abstract} />
        <meta name="citation_pdf_url" content={content.URL} />
        <meta name="citation_download_url" content={content.URL} />
        <meta name="citation_public_url" content={content.URL} />
        <meta name="citation_volume" content={content.volume} />
      </Head>
    ),
    (
      <BasicWindow
        title={content.id}
        width="w-[80%]"
        height="h-[70%]"
        animate={true}
        closePath="/pubblications/"
        onClose={() => {
          router.push("/pubblications/");
        }}
      >
        <div className="flex flex-col gap-5 w-full p-12 overflow-scroll scroll-smooth no-scrollbar">
          <h1 className="text-2xl font-modernBold dark:text-blackpalette-900 underline decoration-wavy decoration-lime decoration-4 underline-offset-4">
            {content.title}
          </h1>
          <h3 className="text-xl font-modernBold">Authors</h3>
          <p className="text-md font-modern dark:text-blackpalette-900">
            {authorList.join(", ")}
          </p>
          <h3 className="text-xl font-modernBold">Published in</h3>
          <p className="text-md font-modern italic dark:text-blackpalette-900">
            {content["container-title"]
              ? content["container-title"]
              : "To be published"}
          </p>
          {/* {authorList[0] == 'Poltronieri Andrea' ? (
            ''
          ) : (
            <>
              <h3 className="text-xl font-modernBold">Note</h3>
              <p className="text-md font-modern dark:text-blackpalette-900">
                Alphabetical order
              </p>
            </>
          )} */}
          <h3 className="text-xl font-modernBold">Abstract</h3>
          <p className="text-md font-modern dark:text-blackpalette-900">
            {content.abstract}
          </p>
          <h3 className="text-xl font-modernBold">Link</h3>
          <button
            className="text-lg bg-cerise active:bg-lime text-whitepalette active:text-blackpalette-900 font-bold py-2 px-4 rounded"
            onClick={() => window.open(content.URL)}
          >
            Go to pubblication
          </button>
          <h3 className="text-xl font-modernBold">Cite</h3>
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-4 items-center flex-wrap">
              <button
                className={formatBtn("bibliography")}
                onClick={() => setCitation(generateCitation("bibliography"))}
              >
                APA
              </button>
              <button
                className={formatBtn("bibtex")}
                onClick={() => setCitation(generateCitation("bibtex"))}
              >
                BibTex
              </button>
              <button
                className={formatBtn("ris")}
                onClick={() => setCitation(generateCitation("ris"))}
              >
                RIS
              </button>
              <button
                className={formatBtn("ndjson")}
                onClick={() => setCitation(generateCitation("ndjson"))}
              >
                NDJSON
              </button>
            </div>
            {citation && (
              <div className="ml-4">
                <button
                  className={`${baseBtn} bg-greypalette-600 dark:bg-whitepalette hover:bg-lime active:bg-cerise hover:text-whitepalette dark:text-blackpalette-900`}
                  onClick={copyToClipboard}
                >
                  {copySuccess || "Copy"}
                </button>
              </div>
            )}
          </div>

          <p className="text-md font-modern dark:text-blackpalette-900">
            {citation}
          </p>
        </div>
      </BasicWindow>
    )
  );
}

export default PubblicationsModal;
