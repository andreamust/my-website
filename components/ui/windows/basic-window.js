import { motion } from 'framer-motion';
import WindowTopBar from './window-topbar';
import { useState } from 'react';
import useWindowDimensions from '../../utils/scree-size';

function BasicWindow(props) {
  let [width, setWidth] = useState(props.width || 'w-[100%]');
  let [height, setHeight] = useState(props.height || 'h-[100%]');
  console.log(useWindowDimensions());

  if (props.animate === true) {
    return (
      <motion.div
        drag
        dragConstraints={{ left: 10, right: 370, top: 10, bottom: 350 }}
        dragMomentum={false}
        onDrag={(event, info) => console.log(info.point.x, info.point.y)}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className={`flex flex-col ${width} ${height}`}
      >
        <motion.div
          className={` order-last flex flex-col w-full rounded-b-md bg-slate-800 ${height}`}
        >
          {props.children}
        </motion.div>
        <WindowTopBar
          title={props.title}
          currentWidth={width}
          baseWidth={props.width}
          widthHandler={setWidth}
          currentHeight={height}
          baseHeight={props.height}
          heightHandler={setHeight}
        />
      </motion.div>
    );
  } else if (props.animate === false) {
    return (
      <div className={`flex flex-col ${width} ${height}`}>
        <WindowTopBar title={props.title} />
        <div
          className={` h-max order-last flex flex-col w-full rounded-b-md bg-slate-800`}
        >
          <div className="h-5/6 rounded-md">{props.children}</div>
        </div>
      </div>
    );
  }
}

export default BasicWindow;
