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
    help: (
      <span>
        <strong>clear</strong> - clears the console. <br />
        <strong>navigate &lt;PAGE&gt;</strong> - Navigate to a website's page.
        <br />
        <strong>change_theme &lt;THEME&gt;</strong> - Changes the theme of the
        terminal. Allowed themes - light, dark, material-light, material-dark,
        material-ocean, matrix and dracula. <br />
        <strong>toggle_control_bar</strong> - Hides / Display the top control
        bar. <br />
        <strong>toggle_control_buttons</strong> - Hides / Display the top
        buttons on control bar. <br />
        <strong>evaluate_math_expression &lt;EXPR&gt;</strong> - Evaluates a
        mathematical expression (eg, <strong>4*4</strong>) by hitting a public
        API, api.mathjs.org.
      </span>
    ),
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
          <span>
            Welcome to my website! Type "help" to see a list of available
            commands.
            <br />
          </span>
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
