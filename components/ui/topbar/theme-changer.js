import { BiSun, BiMoon } from 'react-icons/bi';
import { useTheme } from 'next-themes';

function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  if (theme === 'dark') {
    return (
      <button onClick={() => setTheme('light')}>
        <BiSun className="h-6 w-6" />
      </button>
    );
  } else if (theme === 'light') {
    return (
      <button onClick={() => setTheme('dark')}>
        <BiMoon className="h-6 w-6" />
      </button>
    );
  } else {
    return null;
  }
}

export default ThemeChanger;
