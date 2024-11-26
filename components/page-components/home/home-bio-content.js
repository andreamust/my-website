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
      I&apos;m a researcher in the field of Music Information Retrieval and
      Ph.D. candidate in Computer Science and Engineering.
    </motion.p>
  ),
  2: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a research engineer at the Music Technology Group (MTG) of the
      Pompeu Fabra University an a PhD candidate in Computer Science and
      Engineering at the University of Bologna. My main reasearch interest is
      about Music Information Retrieval (MIR) and Computational Musicology.
    </motion.p>
  ),
  3: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a research engineer at the Music Technology Group (MTG) of the
      Pompeu Fabra University an a PhD candidate in Computer Science and
      Engineering at the University of Bologna. My main reasearch interest is
      about Music Information Retrieval (MIR) and Computational Musicology. More
      specifically, I&apos;m interested in the developement of foundational
      models for music understanding.
    </motion.p>
  ),
  4: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a research engineer at the Music Technology Group (MTG) of the
      Pompeu Fabra University an a PhD candidate in Computer Science and
      Engineering at the University of Bologna. My main reasearch interest is
      about Music Information Retrieval (MIR) and Computational Musicology. More
      specifically, I&apos;m interested in the developement of foundational
      models for music understanding. I&apos;m also a musician and a composer.
    </motion.p>
  ),
};

export default bios;
