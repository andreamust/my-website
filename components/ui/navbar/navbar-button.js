import Link from 'next/link';
import { motion } from 'framer-motion';
import NavApp from './navbar-application';

function NavbarButton(props) {
  const targetPage = props.app === 'Home' ? '/' : `/${props.app.toLowerCase()}`;

  if (props.app === 'Terminal') {
    return (
      <motion.li
        initial={{ opacity: 0, x: '50%', scale: 1.5 }}
        animate={{ opacity: 1, duration: 2, x: 0, scale: 1 }}
        key={`app000${props.index}`}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 120,
          delay: props.index / 6,
        }}
        className="md:flex flex-col flex-none w-10 h-10 items-center place-content-end hidden"
      >
        <button
          onClick={() => props.showTerminal(!props.terminal)}
          aria-label="Open terminal"
        >
          <NavApp
            appName={props.app}
            appIndex={props.index}
            navPosition={props.navPosition}
            key={`app${props.index}`}
          />
        </button>
      </motion.li>
    );
  } else {
    return (
      <Link key={`app000${props.index}`} href={targetPage} passHref>
        <motion.li
          onClick={() => props.showTerminal(false)}
          initial={{ opacity: 0, x: '50%', scale: 1.5 }}
          animate={{ opacity: 1, duration: 2, x: 0, scale: 1 }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 120,
            delay: props.index / 6,
          }}
          className="flex flex-col flex-none w-10 h-10 items-center place-content-end"
        >
          <NavApp
            appName={props.app}
            appIndex={props.index}
            navPosition={props.navPosition}
            key={`app${props.index}`}
          />
        </motion.li>
      </Link>
    );
  }
}

export default NavbarButton;
