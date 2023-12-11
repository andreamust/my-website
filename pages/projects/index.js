import ProjectsLayout from '../../components/page-components/projects/projects-layout';
import fs from 'fs/promises';
import path from 'path';
import PageTitle from '../../components/ui/layout/page-title';
import { Fragment } from 'react/cjs/react.production.min';
import Head from 'next/head';

function Projects(props) {
  const projects = props;
  return (
    (
      <Head>
        <title>Andrea Poltronieri - Projects</title>
        <meta
          name="description"
          content="Andrea Poltronieri's personal website - Projects"
        />
        <meta
          name="keywords"
          content="andrea, poltronieri, andrea poltronieri, poltronieri andrea, andrea poltronieri website, poltronieri andrea website, andrea poltronieri personal website, poltronieri andrea personal website, andrea poltronieri personal website, poltronieri andrea personal websi, researcher, unibo, university of bologna, bologna, italy, computer science, computer engineering, software engineering, software developer, software, machine learning, artificial intelligence, ai, ml, data science, data, science, data engineer, data engineering, data scientist, data science, data analytics, data analyst, data analysis, data visualization, data visualisation, data visualizer, semantic web, ontology, linked open data, linked data, rdf, owl, owl2, owl2rl, owl2, music, music information retrieval, music information, music technology, music, computational musicoogy, computational art"
        ></meta>
        <meta name="author" content="Andrea Poltronieri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
    ),
    (
      <Fragment>
        <PageTitle title={'Projects'} />
        <ProjectsLayout projects={projects} />
      </Fragment>
    )
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const projectsData = await fs.readFile(filePath);
  const data = JSON.parse(projectsData);
  return { props: { projects: data.projects } };
}

export default Projects;
