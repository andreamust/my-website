import ProjectsLayout from '../../components/page-components/projects/projects-layout';
import fs from 'fs/promises';
import path from 'path';
import PageTitle from '../../components/ui/layout/page-title';
import { Fragment } from 'react';
import Head from 'next/head';

function Projects(props) {
  const projects = props;
  return (
    <Fragment>
      <Head>
        <title>Projects — Andrea Poltronieri</title>
        <meta
          name="description"
          content="Explore Andrea Poltronieri's research projects in music information retrieval, audio chord estimation, computational musicology, and semantic web."
        />
        <meta
          name="keywords"
          content="Andrea Poltronieri projects, music information retrieval, audio chord estimation, computational musicology, semantic web, open source"
        />
        <link rel="canonical" href="https://andreapoltronieri.com/projects" />
        <meta property="og:title" content="Projects — Andrea Poltronieri" />
        <meta
          property="og:description"
          content="Explore Andrea Poltronieri's research projects in music information retrieval, computational musicology, and semantic web."
        />
        <meta property="og:url" content="https://andreapoltronieri.com/projects" />
        <meta property="og:image" content="https://andreapoltronieri.com/images/ap.jpeg" />
      </Head>
      <PageTitle title={'Projects'} />
      <ProjectsLayout projects={projects} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const projectsData = await fs.readFile(filePath);
  const data = JSON.parse(projectsData);
  return { props: { projects: data.projects } };
}

export default Projects;
