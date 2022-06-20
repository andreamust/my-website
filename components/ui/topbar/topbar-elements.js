import { motion } from 'framer-motion';
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi';
import Dropdown from './dropdown';
import ThemeChanger from './theme-changer';

function TopBarElements(props) {
  let navPositionSwitch = props.navPosition === 'bottom' ? 'top' : 'bottom';
  return (
    <motion.div className="flex flex-col h-max content-center z-50">
      <div className=" flex flex-row ml-3 mr-5 justify-between z-50">
        <div className="flex flex-row gap-3 justify-center pl-3">
          <Dropdown>File</Dropdown>
          <Dropdown>Options</Dropdown>
          <Dropdown>Utilities</Dropdown>
        </div>
        <div className="flex flex-row gap-4">
          <button onClick={() => props.navPositionHandler(navPositionSwitch)}>
            <BiVolumeFull className="h-6 w-6" />
          </button>
          <ThemeChanger />
        </div>
      </div>
    </motion.div>
  );
}

export default TopBarElements;
