import { motion } from 'framer-motion';

function Separator(props) {
  const strokeColor = props.color || 'stroke-gray-600';
  const strokeWidth = props.width || 2;
  const lineLength = props.length || 'h-full';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={` w-12 ${strokeColor}`}>
      <g>
        <line
          strokeWidth={strokeWidth}
          strokeLinecap="undefined"
          strokeLinejoin="undefined"
          id="svg_2"
          y2="100%"
          x2="50%"
          y1="0%"
          x1="50%"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default Separator;
