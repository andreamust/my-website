import { motion } from "framer-motion";

const bios = {
  0: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a human being.
    </motion.p>
  ),
  1: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a researcher in Music Information Retrieval.
    </motion.p>
  ),
  2: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a research engineer at the Music Technology Group (MTG), Universitat Pompeu Fabra. 
      My work focuses on Music Information Retrieval (MIR) and Computational Musicology.
    </motion.p>
  ),
  3: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a research engineer at the Music Technology Group (MTG), Universitat Pompeu Fabra. 
      My research focuses on Music Information Retrieval (MIR) and Computational Musicology, 
      with a particular interest in developing foundational models for music understanding.
    </motion.p>
  ),
  4: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a research engineer at the Music Technology Group (MTG), Universitat Pompeu Fabra. 
      My research focuses on Music Information Retrieval (MIR) and Computational Musicology, 
      with a particular interest in developing foundational models for music understanding. 
      I hold a Ph.D. in Computer Science and Engineering from the University of Bologna.
    </motion.p>
  ),
};

export default bios;
