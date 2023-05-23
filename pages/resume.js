import BasicWindow from '../components/ui/windows/basic-window';
import ResumeLayout from '../components/page-components/resume/resume-layout';
import fs from 'fs/promises';
import path from 'path';
import PageTitle from '../components/ui/layout/page-title';

function Resume(props) {
  const { resume } = props;
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <PageTitle title={'Resume'} />
      <ResumeLayout resume={resume} />
    </div>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'resume.json');
  const resumeData = await fs.readFile(filePath);
  const data = JSON.parse(resumeData);
  return { props: { resume: data.resume } };
}
export default Resume;
