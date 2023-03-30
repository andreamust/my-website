import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function ThemeChanger() {
  const { theme, setTheme } = useTheme('light');

  let checkedTheme = useEffect(() => (theme === 'dark' ? false : true));

  const toggleDarkMode = (checked) => {
    checked ? setTheme('light') : setTheme('dark');
  };

  return (
    <DarkModeSwitch
      checked={checkedTheme}
      onChange={toggleDarkMode}
      size={25}
      moonColor="#000"
      sunColor="#fff"
    />
  );
}

export default ThemeChanger;
