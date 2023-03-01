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
      <div className="bg-inherit bg-slate-400 bg-opacity-30">
        <h1 className="font-modernMono text-4xl leading-[3.8rem] text-left pl-9 pt-3 mb-3 bg-opacity-30">
          Resume
        </h1>
      </div>
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
