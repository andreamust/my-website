import { BiSun, BiMoon } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = (checked) => {
    checked ? setTheme('light') : setTheme('dark');
  };

  return (
    <DarkModeSwitch
      style={{ marginTop: '.6vh' }}
      checked={theme === 'light' ? true : false}
      onChange={toggleDarkMode}
      size={25}
    />
  );
}

export default ThemeChanger;
