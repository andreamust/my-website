import { Fragment } from 'react/cjs/react.production.min';
import Navbar from '../navbar/navbar';
import TopBar from '../topbar/topbar';
import { useState } from 'react';
import Terminal from '../windows/terminal/terminal';

function Layout(props) {
  const [navPosition, setNavPosition] = useState('bottom');
  const [terminal, showTerminal] = useState(false);
  const [sound, setSound] = useState(true);

  return (
    <Fragment>
      <Navbar
        position={navPosition}
        terminal={terminal}
        showTerminal={showTerminal}
      />
      <TopBar
        navPosition={navPosition}
        navPositionHandler={setNavPosition}
        soundState={sound}
        soundHandler={setSound}
      />
      {terminal === true && (
        <Terminal terminal={terminal} showTerminal={showTerminal} />
      )}
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
