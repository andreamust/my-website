import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function ThemeChanger() {
  const { theme, setTheme } = useTheme('light');

  let checkedTheme = theme === 'dark' ? false : true;

  const toggleDarkMode = (checked) => {
    checked ? setTheme('light') : setTheme('dark');
  };

  return (
    <DarkModeSwitch
      checked={checkedTheme}
      onChange={toggleDarkMode}
      size={25}
      moonColor="#FFFDFD"
      sunColor="#FFFDFD"
    />
  );
}

export default ThemeChanger;
