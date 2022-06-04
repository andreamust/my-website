import { Fragment } from 'react/cjs/react.production.min';
import Navbar from '../navbar/navbar';
import TopBar from '../topbar/topbar';

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main>
        <TopBar />
        {props.children}
      </main>
    </Fragment>
  );
}

export default Layout;
