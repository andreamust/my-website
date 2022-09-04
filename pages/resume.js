import BasicWindow from '../components/ui/windows/basic-window';
import ResumeLayout from '../components/page-components/resume/resume-layout';
import fs from 'fs/promises';
import path from 'path';

function Resume(props) {
  const { resume } = props;
  return (
    <BasicWindow
      title={'andrea-poltronieri/resume'}
      width={'w-full'}
      height={'h-full'}
      animate={false}
    >
      <ResumeLayout resume={resume} />
    </BasicWindow>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'resume.json');
  const resumeData = await fs.readFile(filePath);
  const data = JSON.parse(resumeData);
  return { props: { resume: data.resume } };
}
export default Resume;
