import BasicWindow from '../components/ui/windows/basic-window';
import ResumeLayout from '../components/page-components/resume/resume-layout';

function Resume(props) {
  return (
    <BasicWindow
      title={'andrea-poltronieri/resume'}
      width={'w-full'}
      height={'h-full'}
      animate={false}
    >
      <ResumeLayout />
    </BasicWindow>
  );
}

export default Resume;
