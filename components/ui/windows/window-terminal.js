import { ReactTerminal } from 'react-terminal';
import { useRouter } from 'next/router';
import themes from './terminal/terminal-themes';
import { useState, useEffect } from 'react';

function WindowTerminal() {
  const router = useRouter();

  const validPages = ['home', 'resume', 'projects', 'pubblications', 'contact'];

  // theme changer
  let [theme, setTheme] = useState('dark');
  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    }
  }, []);

  const commands = {
    whoami: 'Andrea Poltronieri',
    whatdoido: 'I am a Ph.D. in Computer Science and Engineering',
    help: (
      <span>
        <strong>clear</strong> - clears the console. <br />
        <strong>navigate &lt;PAGE&gt;</strong> - Navigate to a website&aposs;
        page.
        <br />
        <strong>cd &lt;PAGE&gt;</strong> - Alias for navigate. <br />
        <strong>theme &lt;THEME&gt;</strong> - Changes the theme of the
        terminal. Allowed themes - <b>{Object.keys(themes).join(', ')}</b>.{' '}
        <br />
        <strong>whoami</strong> - Prints my name. <br />
        <strong>whatdoido</strong> - Prints what I do. <br />
        <strong>help</strong> - Prints this help message. <br />
        <strong>social</strong> - Prints my social links.
      </span>
    ),
    clear: () => null,
    cd: (page) =>
      validPages.includes(page.toLowerCase()) ||
      validPages.includes(page.toLowerCase().slice(0, -1)) ? (
        router.push(`/${page === 'home' ? '' : page}`)
      ) : (
        <span>
          Page not found: {page}
          <br />
          The available pages are: <b>{validPages.join(', ')}</b>
        </span>
      ),
    social: (
      <span>
        <a
          href="https://www.linkedin.com/in/andrea-poltronieri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <a
          href="https://github.com/andreamust"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <br />
        <a
          href="https://twitter.com/andpoltronieri"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </span>
    ),
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
    theme: (theme) =>
      Object.keys(themes).includes(theme.toLowerCase()) ? (
        (setTheme(theme.toLowerCase()),
        window.localStorage.setItem('theme', theme.toLowerCase()))
      ) : (
        <span>
          Theme not found: {theme}
          <br />
          The available themes are: <b>{Object.keys(themes).join(', ')}</b>
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
        theme={theme}
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
