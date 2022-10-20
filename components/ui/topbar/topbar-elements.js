import { motion } from 'framer-motion';
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi';
import Dropdown from './dropdown';
import ThemeChanger from './theme-changer';
import { BsReverseLayoutSidebarInsetReverse } from 'react-icons/bs';
import useSound from 'use-sound';
import { lightOn } from '../../../public/sounds/lamp_on.mp3';
import { lightOff } from '../../../public/sounds/lamp_off.mp3';

function TopBarElements(props) {
  let navPositionSwitch = props.navPosition === 'bottom' ? 'top' : 'bottom';
  let SoundIcon = props.soundState ? BiVolumeFull : BiVolumeMute;

  const [playOn, { stop }] = useSound(lightOn, (onload) => {
    console.log(2222222);
  });
  const [playOff] = useSound(lightOff);

  return (
    <motion.div className="flex flex-col h-max content-center z-50">
      <div className=" flex flex-row ml-3 mr-5 justify-between z-50">
        <div className="invisible md:visible flex-row gap-3 justify-center pl-3 ">
          <Dropdown>Options</Dropdown>
          <Dropdown>Navigate</Dropdown>
          <Dropdown>View</Dropdown>
          <Dropdown>Help</Dropdown>
        </div>
        <div className="flex flex-row gap-4">
          <button
            onClick={() => {
              playOff;
              props.soundHandler(!props.soundState);
            }}
            onMouseEnter={() => playOn()}
            onMouseLeave={() => stop()}
          >
            <SoundIcon className="h-8 w-8 md:h-6 md:w-6" />
          </button>
          <button onClick={() => props.navPositionHandler(navPositionSwitch)}>
            <BsReverseLayoutSidebarInsetReverse
              className={`h-8 w-8 md:h-6 md:w-6 md:inline hidden ${
                navPositionSwitch === 'bottom'
                  ? ''
                  : 'rotate-90 transition-shadow'
              }`}
            />
          </button>
          <button onClick={playOn}>
            <ThemeChanger />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default TopBarElements;
