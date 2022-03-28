import { Fragment } from 'react/cjs/react.production.min';
import Navbar from '../navbar/navbar';

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
