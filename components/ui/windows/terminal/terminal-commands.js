import { useRouter } from 'next/router';

const validPages = ['home', 'about', 'contact'];

const commands = {
  whoami: 'Andrea Poltronieri',
  whatdoido: 'I am a Ph.D. in Computer Science and Engineering',
  cd: (directory) => `changed path to ${directory}`,
  navigate: (page) => {
    if (validPages.includes(page)) {
      router.push(`/${page}`);
    } else {
      ('page not found');
    }
  },
};

export default commands;
