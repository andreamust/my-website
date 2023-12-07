import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

function WindowTopBar(props) {
  const resizeWindow = () => {
    props.widthHandler(
      props.currentWidth <= props.baseWidth ? 'w-[95%]' : props.baseWidth
    );
    props.heightHandler(
      props.currentHeight <= props.baseHeight ? 'h-[89%]' : props.baseHeight
    );
  };

  const closePath = props.closePath ? props.closePath : '/';
  const router = useRouter();
  const windowTerminal =
    props.title.split('/')[1] === 'terminal' ? true : false;

  return (
    <div
      className="h-8 flex flex-row bg-greypalette-600 dark:bg-whitepalette rounded-t-md text-center text-base justify-between align-middle"
      onDoubleClick={resizeWindow}
    >
      <div className="flex-auto self-center">{props.title}</div>
      <div className="flex flex-row basis-12 self-center ">
        <motion.div
          className="flex-none bg-yellow-300 h-4 w-4 rounded-2xl self-end mx-[2px]"
          whileHover={{
            scale: 1.05,
            boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.1, ease: 'easeIn' },
          }}
          onClick={resizeWindow}
        ></motion.div>
        <motion.div
          className="flex-none bg-red-600 h-4 w-4 rounded-2xl self-end mx-[2px]"
          whileHover={{
            scale: 1.05,
            boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.1, ease: 'easeIn' },
          }}
          onClick={() => {
            windowTerminal ? props.showTerminal(false) : router.push(closePath);
          }}
        ></motion.div>
      </div>
    </div>
  );
}

export default WindowTopBar;
