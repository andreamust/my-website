import useMobile from '../../utils/mobile';
import NavbarButton from './navbar-button';

const apps = [
  'Home',
  'Resume',
  'Projects',
  'Pubblications',
  'Contact',
  'Terminal',
];

function Navbar(props) {
  const mobile = useMobile();

  let slicedApps = mobile ? apps.slice(0, 5) : apps;

  return (
    <header
      className={
        'static z-50 pb-2 ' +
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
              terminal={props.terminal}
              showTerminal={props.showTerminal}
            />
          );
        })}
      </ul>
    </header>
  );
}

export default Navbar;
