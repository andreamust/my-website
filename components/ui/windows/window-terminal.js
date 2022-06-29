import { Fragment } from 'react/cjs/react.production.min';
import { ReactTerminal } from 'react-terminal';
import { useRouter } from 'next/router';
import themes from './terminal/terminal-themes';

function WindowTerminal() {
  const router = useRouter();

  const validPages = ['home', 'resume', 'projects', 'pubblications', 'contact'];

  const commands = {
    whoami: 'Andrea Poltronieri',
    whatdoido: 'I am a Ph.D. in Computer Science and Engineering',
    help: (
      <span>
        <strong>clear</strong> - clears the console. <br />
        <strong>navigate &lt;PAGE&gt;</strong> - Navigate to a website&aposs;
        page.
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
    pubblications: (
      <table>
        <tr>
          <th>Title</th>
          <th> </th>
          <th>Venue</th>
        </tr>
        <tr>
          <td>pub1</td>
          <td> </td>
          <td>venue1</td>
        </tr>
      </table>
    ),
    cd: (directory) => `changed path to ${directory}`,
    navigate: (page) =>
      validPages.includes(page.toLowerCase()) ||
      validPages.includes(page.toLowerCase().slice(0, -1)) ? (
        router.push(`/${page}`)
      ) : (
        <span>
          Page not found: {page}
          <br />
          The available pages are: <b>{validPages.join(', ')}</b>
        </span>
      ),
  };

  return (
    <div className="w-full h-full">
      <ReactTerminal
        welcomeMessage={
          <span>
            Welcome to my website! You can navigate it by using the terminal.{' '}
            <br /> Type &quot;help&quot; to see a list of available commands.
            <br />
          </span>
        }
        prompt={'andreapoltronieri@website 🎸'}
        commands={commands}
        showControlBar={false}
        showControlButtons={false}
        themes={themes}
        theme={'customDarkTheme'}
        errorMessage={
          <span>
            Command not found!
            <br />
            Type &quot;help&quot; to see a list of available commands.
          </span>
        }
      />
    </div>
  );
}

export default WindowTerminal;
