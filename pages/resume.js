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
    setIsClient(true); // Mark the component as hydrated
  }, []);

  return (
    (
      <Head>
        <title>Resume | Andrea Poltronieri</title>
        <meta
          name="description"
          content="Andrea Poltronieri's resume. A brief summary of my education and work experience."
        />
        <meta
          name="keywords"
          content="Andrea Poltronieri, Poltronieri Andrea, Resume, CV, Curriculum Vitae, Education, Work Experience, Skills"
        />
        <meta name="author" content="Andrea Poltronieri" />
        <meta name="robots" content="index, follow" />
        <meta
          name="og:title"
          property="og:title"
          content="Resume | Andrea Poltronieri"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Andrea Poltronieri's resume. A brief summary of my education and work experience."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://andreapoltronieri.com/images/og-image.png"
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://andreapoltronieri.com/resume"
        />
        <meta
          name="og:site_name"
          property="og:site_name"
          content="Andrea Poltronieri"
        />
        <meta name="og:type" property="og:type" content="website" />
        <meta name="og:locale" property="og:locale" content="en_US" />
      </Head>
    ),
    (
      <div className="flex flex-col h-full overflow-hidden">
        <PageTitle title={"Resume"} />

        {isMobile ? (
          <ResumeLayoutMobile resume={resume} />
        ) : (
          <ResumeLayout resume={resume} />
        )}
      </div>
    )
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "resume.json");
  const resumeData = await fs.readFile(filePath);
  const data = JSON.parse(resumeData);
  return { props: { resume: data.resume } };
}
export default Resume;
