import { motion } from 'framer-motion';
import TopBarElements from './topbar-elements';

function TopBar(props) {
  return (
    <motion.div className="absolute flex flex-col grid-span-12 w-full h-12 md:h-9 bg-gray-400 dark:bg-gray-600 opacity-90 justify-center z-50">
      <TopBarElements
        navPosition={props.navPosition}
        navPositionHandler={props.navPositionHandler}
        soundHandler={props.soundHandler}
        soundState={props.soundState}
      />
    </motion.div>
  );
}

export default TopBar;
