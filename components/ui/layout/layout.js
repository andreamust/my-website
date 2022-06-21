import { Fragment } from 'react/cjs/react.production.min';
import Navbar from '../navbar/navbar';
import TopBar from '../topbar/topbar';
import { useState } from 'react';

function Layout(props) {
  const [navPosition, setNavPosition] = useState('bottom');
  const [terminal, showTerminal] = useState(true);
  return (
    <Fragment>
      <Navbar
        position={navPosition}
        showTerminal={terminal}
        showTerminalHandler={showTerminal}
      />
      <TopBar navPosition={navPosition} navPositionHandler={setNavPosition} />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
