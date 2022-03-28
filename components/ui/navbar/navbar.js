import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import NavApp from './application';

const apps = ['About', 'Resume', 'Projects', 'Pubblications', 'Contact'];
const navPosition = 'bottom';

function Navbar(props) {
  return (
    <header
      className={
        'pb-2 ' +
        (navPosition === 'bottom'
          ? 'col-start-3 row-start-5 col-end-10 h-16 self-end'
          : 'flex-col col-start-12 row-start-2 row-end-5 w-16 ml-2 ')
      }
    >
      <ul
        className={
          navPosition === 'bottom'
            ? 'flex bg-slate-200 justify-around items-center rounded-xl h-full w-full'
            : 'flex flex-col bg-slate-200 justify-around items-center rounded-xl h-full w-full'
        }
      >
        {apps.map((app, index) => {
          return (
            <Link href={`/${app.toLowerCase()}`}>
              <motion.li
                key={`app000${index}`}
                initial={{ opacity: 0, x: '50%', scale: 1.5 }}
                animate={{ opacity: 1, duration: 2, x: 0, scale: 1 }}
                transition={{
                  type: 'spring',
                  damping: 25,
                  stiffness: 120,
                  delay: index / 6,
                }}
                className="flex flex-col flex-none w-10 h-10 items-center place-content-end"
              >
                <NavApp
                  appName={app}
                  appIndex={index}
                  navPosition={navPosition}
                />
              </motion.li>
            </Link>
          );
        })}
      </ul>
    </header>
  );
}

export default Navbar;
