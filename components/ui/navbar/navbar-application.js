import { GiBookshelf } from 'react-icons/gi';
import { IoSchoolOutline } from 'react-icons/io5';
import {
  RiHome2Line,
  RiCodeSSlashFill,
  RiChat4Line,
  RiTerminalLine,
} from 'react-icons/ri';
import { useState } from 'react';
import { motion } from 'framer-motion';

const IconNames = {
  Terminal: RiTerminalLine,
  Home: RiHome2Line,
  Resume: IoSchoolOutline,
  Projects: RiCodeSSlashFill,
  Pubblications: GiBookshelf,
  Contact: RiChat4Line,
};

function NavApp(props) {
  const [viewBaloon, setViewBaloon] = useState(false);
  const Icon = IconNames[props.appName];
  return (
    <div
      className={
        'flex gap-5 flex-none w-10 h-10 items-center ' +
        (props.navPosition === 'bottom'
          ? 'flex-col place-content-end'
          : 'flex-row place-content-end')
      }
    >
      <div
        className={`${
          viewBaloon === props.appIndex ? 'md:visible invisible' : 'invisible'
        } ${
          props.navPosition === 'bottom'
            ? 'flex-none flex order-first min-w-[5vw] h-8 bg-slate-400 px-2 rounded-lg text-center place-content-center duration-155 justify-center items-center text-md'
            : 'flex-none flex order-first min-w-[5vw] h-8 bg-slate-400 px-2 rounded-lg text-center place-content-center duration-155 justify-center items-center text-md'
        } `}
      >
        <div
          className={
            props.navPosition === 'bottom'
              ? 'absolute w-0 h-0 border-t-slate-400 border-8 border-transparent bottom-[110%]'
              : 'absolute w-0 h-0 border-l-slate-400 border-[6px] border-transparent right-[120%]'
          }
        />
        {props.appName}
      </div>
      <motion.div
        className="flex-none order-last w-full h-full"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.3,
          transition: {
            duration: 0.15,
            ease: 'easeIn',
            type: 'spring',
            stiffness: 400,
            damping: 10,
          },
        }}
        whileTap={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
      >
        <Icon
          className="w-full h-full cursor-pointer"
          onMouseEnter={() => {
            setViewBaloon(props.appIndex);
          }}
          onMouseLeave={() => {
            setViewBaloon(false);
          }}
        />
      </motion.div>
    </div>
  );
}

export default NavApp;
