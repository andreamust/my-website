import Steps, { Step } from 'rc-steps';
import { FaFilePdf } from 'react-icons/fa';

function ResumeTimebar(props) {
  return (
    <div className="h-screen">
      <Steps
        initial={0}
        current={1}
        direction="horizonatal"
        labelPlacement={'horizontal'}
      >
        <Steps.Step
          title="first"
          description="prova prova"
          icon={<FaFilePdf />}
        />
        <Steps.Step title="second" />
        <Steps.Step title="third" />
      </Steps>
    </div>
  );
}

export default ResumeTimebar;
