import { motion } from 'framer-motion';
import TopBarElements from './topbar-elements';

function TopBar(props) {
  return (
    <motion.div className=" grid-span-12 w-full h-9 bg-slate-400 items-center">
      <TopBarElements />
    </motion.div>
  );
}

export default TopBar;
