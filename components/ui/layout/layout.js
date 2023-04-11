import Navbar from '../navbar/navbar';
import TopBar from '../topbar/topbar';
import { useState } from 'react';
import Terminal from '../windows/terminal/terminal';
import { Fragment } from 'react';

function Layout(props) {
  const [navPosition, setNavPosition] = useState('bottom');
  const [terminal, showTerminal] = useState(false);
  const [sound, setSound] = useState(true);

  return (
    <Fragment>
      <TopBar
        navPosition={navPosition}
        navPositionHandler={setNavPosition}
        soundState={sound}
        soundHandler={setSound}
      />
      {terminal && <Terminal terminal={terminal} showTerminal={showTerminal} />}
      <main>{props.children}</main>
      <Navbar
        position={navPosition}
        terminal={terminal}
        showTerminal={showTerminal}
      />
    </Fragment>
  );
}

export default Layout;
