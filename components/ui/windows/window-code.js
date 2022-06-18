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
      'redirecting to page: ${page}';
      router.push(`/${page}`);
    },
  };

  // TODO: fix
  return (
    <div className=" h-full">
      <ReactTerminal
        prompt={'andreapoltronieri@website 🎸'}
        welcomeMessage={
          'Welcome to my website! You can navigate it using the terminal or normally.'
        }
        commands={commands}
        showControlBar={false}
        showControlButtons={false}
        themes={{
          customDarkTheme: {
            themeBGColor: '#292727',
            themeToolbarColor: '#DBDBDB',
            themeColor: '#ffffff',
            themePromptColor: '#00ff2a',
          },
          customLightTheme: {
            themeBGColor: '#292727',
            themeToolbarColor: '#DBDBDB',
            themeColor: '#ffffff',
            themePromptColor: '#ff00e1',
          },
        }}
        theme={'customDarkTheme'}
      />
    </div>
  );
}

export default WindowCode;
