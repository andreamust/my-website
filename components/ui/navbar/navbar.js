import NavbarButton from './navbar-button';
import { useState, useEffect } from 'react';

const apps = [
  'Home',
  'Resume',
  'Projects',
  'Pubblications',
  'Contact',
  'Terminal',
];

function Navbar(props) {
  const [isMobile, setIsMobile] = useState(false);
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  let slicedApps = isMobile ? apps.slice(1, 7) : apps;

  return (
    <header
      className={
        'relative z-50 pb-2 ' +
        (props.position === 'bottom'
          ? 'row-start-5 col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10 h-16 self-end md:pl-14 md:pr-14'
          : 'flex-col col-start-12 row-start-2 row-end-5 w-16 mr-3 justify-self-end')
      }
    >
      <ul
        className={
          'bg-gray-300/[0.6] dark:bg-gray-500/[0.6] justify-around items-center rounded-xl h-full w-full backdrop-blur-sm ' +
          (props.position === 'bottom' ? 'flex flex-row' : 'flex flex-col')
        }
      >
        {slicedApps.map((app, index) => {
          return (
            <NavbarButton
              key={index}
              app={app}
              index={index}
              navPosition={props.position}
            />
          );
        })}
      </ul>
    </header>
  );
}

export default Navbar;
