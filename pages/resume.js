import ResumeLayout from "../components/page-components/resume/resume-layout";
import ResumeLayoutMobile from "../components/page-components/resume/resume-layout-mobile";
import fs from "fs/promises";
import path from "path";
import PageTitle from "../components/ui/layout/page-title";
import Head from "next/head";
import useMobile from "../components/utils/mobile";
import { useEffect, useState } from "react";

function Resume(props) {
  let isMobile = useMobile();

  const { resume } = props;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Resume — Andrea Poltronieri</title>
        <meta
          name="description"
          content="Academic resume of Andrea Poltronieri: education, research positions, publications, and skills in music information retrieval and computer science."
        />
        <meta
          name="keywords"
          content="Andrea Poltronieri resume, CV, curriculum vitae, music information retrieval, computer science, University of Bologna"
        />
        <link rel="canonical" href="https://andreapoltronieri.com/resume" />
        <meta property="og:title" content="Resume — Andrea Poltronieri" />
        <meta
          property="og:description"
          content="Academic resume of Andrea Poltronieri: education, research positions, and skills in music information retrieval."
        />
        <meta property="og:url" content="https://andreapoltronieri.com/resume" />
        <meta property="og:image" content="https://andreapoltronieri.com/images/ap.jpeg" />
      </Head>
      <div className="flex flex-col h-full overflow-hidden">
        <PageTitle title={"Resume"} />
        {isMobile ? (
          <ResumeLayoutMobile resume={resume} />
        ) : (
          <ResumeLayout resume={resume} />
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "resume.json");
  const resumeData = await fs.readFile(filePath);
  const data = JSON.parse(resumeData);
  return { props: { resume: data.resume } };
}

export default Resume;
