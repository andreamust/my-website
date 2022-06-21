import { motion } from 'framer-motion';
import TopBarElements from './topbar-elements';

function TopBar(props) {
  return (
    <motion.div className="absolute flex flex-col grid-span-12 w-full h-9 bg-slate-400 opacity-90 justify-center z-50">
      <TopBarElements
        navPosition={props.navPosition}
        navPositionHandler={props.navPositionHandler}
      />
    </motion.div>
  );
}

export default TopBar;
