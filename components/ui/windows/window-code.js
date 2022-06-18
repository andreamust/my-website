import { Fragment } from 'react/cjs/react.production.min';
import { ReactTerminal } from 'react-terminal';
import { useRouter } from 'next/router';

function WindowCode() {
  const router = useRouter();

  // Define commands here
  const commands = {
    whoami: 'Andrea Poltronieri',
    whatdoido: 'I am a Ph.D. in Computer Science and Engineering',
    cd: (directory) => `changed path to ${directory}`,
    navigate: (page) => {
      if (page in ['home', 'projects', 'resume', 'pubblications', 'contact']) {
        router.push(`/${page}`);
      } else {
        ('Page not found. Try with a valid page.');
      }
    },
  };

  // TODO: fix
  return (
    <div className=" h-96 ">
      {' '}
      <ReactTerminal
        prompt="andreapoltronieri@website - %"
        welcomeMessage={`Welcome to my website!
        You can navigate it using the terminal or `}
        commands={commands}
        showControlBar={false}
        showControlButtons={false}
        theme={'dark'}
      />
    </div>
  );
}

export default WindowCode;
