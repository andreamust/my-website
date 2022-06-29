import ResumeTimebar from './resume-timebar';
import ResumeContent from './resume-content';

function ResumeLayout(props) {
  return (
    <div className="flex md:flex-col gap-20 p-14">
      <ResumeTimebar />
      <ResumeContent />
    </div>
  );
}

export default ResumeLayout;
