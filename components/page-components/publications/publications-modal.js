import BasicWindow from "../../ui/windows/basic-window";
import renderCitation from "../../utils/process-publications";
import { useState, Fragment } from "react";
import useMobile from "../../utils/mobile";
import Head from "next/head";

function PublicationsModal(props) {
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

  const publicationYear = content.issued?.["date-parts"]?.[0]?.[0];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: content.title,
    author: content.author.map((a) => ({
      "@type": "Person",
      name: `${a.given} ${a.family}`,
    })),
    datePublished: publicationYear ? String(publicationYear) : undefined,
    isPartOf: content["container-title"]
      ? { "@type": "Periodical", name: content["container-title"] }
      : undefined,
    url: content.URL || undefined,
    abstract: content.abstract || undefined,
  };

  return (
    <Fragment>
      <Head>
        <title>{content.title} — Andrea Poltronieri</title>
        <meta
          name="description"
          content={
            content.abstract
              ? content.abstract.slice(0, 160)
              : `Publication by Andrea Poltronieri: ${content.title}`
          }
        />
        <meta name="citation_title" content={content.title} />
        <meta name="citation_author" content={authorList.join(", ")} />
        {publicationYear && (
          <meta name="citation_publication_date" content={String(publicationYear)} />
        )}
        {content["container-title"] && (
          <meta
            name="citation_journal_title"
            content={content["container-title"]}
          />
        )}
        {content.abstract && (
          <meta name="citation_abstract" content={content.abstract} />
        )}
        {content.URL && (
          <>
            <meta name="citation_pdf_url" content={content.URL} />
            <meta name="citation_public_url" content={content.URL} />
          </>
        )}
        {content.volume && (
          <meta name="citation_volume" content={content.volume} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>
      <BasicWindow
        title={content.id}
        width="w-[80%]"
        height="h-[70%]"
        animate={true}
        closePath="/publications/"
        onClose={() => {
          router.push("/publications/");
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
          <h3 className="text-xl font-modernBold">Abstract</h3>
          <p className="text-md font-modern dark:text-blackpalette-900">
            {content.abstract}
          </p>
          <h3 className="text-xl font-modernBold">Link</h3>
          <button
            className="text-lg bg-cerise active:bg-lime text-whitepalette active:text-blackpalette-900 font-bold py-2 px-4 rounded"
            onClick={() => window.open(content.URL)}
          >
            Go to publication
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
    </Fragment>
  );
}

export default PublicationsModal;
