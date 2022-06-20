import { Fragment } from 'react/cjs/react.production.min';
import { ReactTerminal } from 'react-terminal';
import { useRouter } from 'next/router';
import themes from './terminal/terminal-themes';

function WindowCode() {
  const router = useRouter();

  const validPages = ['home', 'about', 'contact'];

  const commands = {
    whoami: 'Andrea Poltronieri',
    whatdoido: 'I am a Ph.D. in Computer Science and Engineering',
    help: `List of commands: \n
    \n- whoami \n
    \n- whatdoido \n
    - navigate to a page \n
    - cd to a directory \n
    - help`,
    cd: (directory) => `changed path to ${directory}`,
    navigate: (page) =>
      validPages.includes(page)
        ? router.push(`/${page}`)
        : `Page not found: ${page}`,
  };

  return (
    <div className="w-full h-full">
      <ReactTerminal
        welcomeMessage={
          'Welcome to my website! Type "help" to see a list of available commands.'
        }
        prompt={'\nandreapoltronieri@website 🎸'}
        commands={commands}
        showControlBar={false}
        showControlButtons={false}
        themes={themes}
        theme={'customDarkTheme'}
      />
    </div>
  );
}

export default WindowCode;
