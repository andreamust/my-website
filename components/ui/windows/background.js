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
      animate={{
        backgroundColor: ['hsl(0, 0, 66)', 'hsl(0, 100, 100)', 'hsl(0, 0, 66)'],
      }}
      transition={{ repeat: Infinity, duration: 10 }}
      whileHover={{ colorInterpolationFilters: 'hsl(0, 0, 0)' }}
    >
      {props.children}
    </motion.div>
  );
}

export default Background;
