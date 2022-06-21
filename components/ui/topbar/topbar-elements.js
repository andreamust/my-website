import { motion } from 'framer-motion';
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi';
import Dropdown from './dropdown';
import ThemeChanger from './theme-changer';
import { BsReverseLayoutSidebarInsetReverse } from 'react-icons/bs';
import { useState, useEffect } from 'react';

function TopBarElements(props) {
  let navPositionSwitch = props.navPosition === 'bottom' ? 'top' : 'bottom';

  const [isMobile, setIsMobile] = useState(false);
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  let leftApps = isMobile ? (
    <div />
  ) : (
    <div className="flex flex-row gap-3 justify-center pl-3">
      <Dropdown>File</Dropdown>
      <Dropdown>Options</Dropdown>
      <Dropdown>Utilities</Dropdown>
    </div>
  );

  if (setIsMobile === true) {
  }

  return (
    <motion.div className="flex flex-col h-max content-center z-50">
      <div className=" flex flex-row ml-3 mr-5 justify-between z-50">
        {leftApps}
        <div className="flex flex-row gap-4">
          <button onClick={() => props.navPositionHandler(navPositionSwitch)}>
            <BiVolumeFull className="h-6 w-6" />
          </button>
          <button onClick={() => props.navPositionHandler(navPositionSwitch)}>
            <BsReverseLayoutSidebarInsetReverse
              className={`h-6 w-6 ${
                navPositionSwitch === 'bottom'
                  ? ''
                  : 'rotate-90 transition-shadow'
              }`}
            />
          </button>
          <ThemeChanger />
        </div>
      </div>
    </motion.div>
  );
}

export default TopBarElements;
