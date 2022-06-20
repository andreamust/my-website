import { motion } from 'framer-motion';
import TopBarElements from './topbar-elements';

function TopBar(props) {
  return (
    <motion.div className="flex flex-col grid-span-12 w-full h-9 bg-slate-400 justify-center z-50">
      <TopBarElements />
    </motion.div>
  );
}

export default TopBar;
