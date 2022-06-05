import { motion } from 'framer-motion';
import { BiSun, BiMoon, BiVolumeFull, BiVolumeMute } from 'react-icons/bi';
import Dropdown from './dropdown';

function TopBarElements(props) {
  return (
    <motion.div className="flex flex-col h-max content-center">
      <div className=" flex flex-row ml-3 mr-5 justify-between">
        <div className="flex flex-row gap-3 justify-center pl-3">
          <Dropdown>File</Dropdown>
          <Dropdown>Options</Dropdown>
          <Dropdown>Utilities</Dropdown>
        </div>
        <div className="flex flex-row gap-4">
          <button>
            <BiVolumeFull className="h-6 w-6" />
          </button>
          <button>
            <BiMoon className="h-6 w-6 hover:animate-spin" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default TopBarElements;
