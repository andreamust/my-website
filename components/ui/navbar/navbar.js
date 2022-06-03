import NavbarButton from './navbar-button';

const apps = ['Home', 'Resume', 'Projects', 'Pubblications', 'Contact'];
const navPosition = 'bottom';

function Navbar(props) {
  return (
    <header
      className={
        ' z-50 pb-2 ' +
        (navPosition === 'bottom'
          ? 'col-start-3 row-start-5 col-end-10 h-16 self-end'
          : 'flex-col col-start-12 row-start-2 row-end-5 w-16 ml-2 ')
      }
    >
      <ul
        className={
          navPosition === 'bottom'
            ? 'flex bg-slate-200/[0.6] justify-around items-center rounded-xl h-full w-full'
            : 'flex flex-col bg-slate-200/[0.6] justify-around items-center rounded-xl h-full w-full'
        }
      >
        {apps.map((app, index) => {
          return (
            <NavbarButton
              key={index}
              app={app}
              index={index}
              navPosition={navPosition}
            />
          );
        })}
      </ul>
    </header>
  );
}

export default Navbar;
