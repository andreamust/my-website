import { motion } from 'framer-motion';
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi';
import Dropdown from './dropdown';
import ThemeChanger from './theme-changer';
import { BsReverseLayoutSidebarInsetReverse } from 'react-icons/bs';
import useSound from 'use-sound';
import { useEffect } from 'react';

function TopBarElements(props) {
  let navPositionSwitch = props.navPosition === 'bottom' ? 'top' : 'bottom';
  let SoundIcon = props.soundState ? BiVolumeFull : BiVolumeMute;

  useEffect(() => {
    const audio = new window.AudioContext();
    audio.resume();
  }, []);

  const [playOn] = useSound('sounds/lamp_on.mp3', { volume: 1.0 });
  const [playOff] = useSound('sounds/lamp_off.mp3', { volume: 1.0 });
  const [playMove] = useSound('sounds/move.flac', { volume: 1.0 });
  const [playSun] = useSound('sounds/sun.flac', { volume: 1.0 });

  return (
    <motion.div className="flex flex-col h-max content-center z-50">
      <div className=" flex flex-row ml-3 mr-5 justify-between z-50">
        <div className="invisible md:visible flex-row gap-3 justify-center pl-3 ">
          <Dropdown
            dropdownElements={[
              { name: 'Settings', link: '#' },
              { name: 'Other', link: '#' },
            ]}
          >
            Options
          </Dropdown>
          <Dropdown
            dropdownElements={[
              { name: 'Settings', link: '#' },
              { name: 'Other', link: '#' },
            ]}
          >
            View
          </Dropdown>
        </div>
        <div className="flex flex-row gap-4">
          <button
            onClick={() => {
              props.soundHandler(!props.soundState);
              props.soundState ? playOn() : playOff();
            }}
          >
            <SoundIcon className="h-8 w-8 md:h-6 md:w-6" />
          </button>
          <button
            onClick={() => {
              props.navPositionHandler(navPositionSwitch);
              props.soundState ? playMove() : '';
            }}
          >
            <BsReverseLayoutSidebarInsetReverse
              className={`h-8 w-8 md:h-6 md:w-6 md:inline hidden ${
                navPositionSwitch === 'bottom'
                  ? ''
                  : 'rotate-90 transition-shadow'
              }`}
            />
          </button>
          <button
            onClick={() => {
              props.soundState ? playSun() : '';
            }}
          >
            <ThemeChanger />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default TopBarElements;
