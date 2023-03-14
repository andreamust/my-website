import { Fragment } from 'react/cjs/react.production.min';
import Navbar from '../navbar/navbar';
import TopBar from '../topbar/topbar';
import { useState } from 'react';
import Terminal from '../../../pages/terminal';

function Layout(props) {
  const [navPosition, setNavPosition] = useState('bottom');
  const [terminal, showTerminal] = useState(true);
  const [sound, setSound] = useState(true);

  return (
    <Fragment>
      <Navbar
        position={navPosition}
        showTerminal={terminal}
        showTerminalHandler={showTerminal}
      />
      <TopBar
        navPosition={navPosition}
        navPositionHandler={setNavPosition}
        soundState={sound}
        soundHandler={setSound}
      />
      <main>{props.children}</main>
      {terminal && <Terminal openState={terminal} openHandler={showTerminal} />}
    </Fragment>
  );
}

export default Layout;
