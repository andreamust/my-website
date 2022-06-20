import { motion } from 'framer-motion';

const variants = {
  active: {
    backgroundColor: '#f00',
  },
  inactive: {
    backgroundColor: '#fff',
    transition: { duration: 0.5 },
  },
};

function Background(props) {
  return (
    <motion.div
      className="h-screen w-full"
      variants={variants}
      animate="inactive"
    >
      {props.children}
    </motion.div>
  );
}

export default Background;
