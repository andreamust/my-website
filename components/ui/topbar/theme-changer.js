import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = (checked) => {
    checked ? setTheme('light') : setTheme('dark');
  };

  return (
    <DarkModeSwitch
      checked={theme === 'light' ? true : false}
      onChange={toggleDarkMode}
      size={25}
      moonColor="#000"
      sunColor="#fff"
    />
  );
}

export default ThemeChanger;
