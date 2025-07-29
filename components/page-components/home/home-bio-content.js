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
      I&apos;m a postdoctoral researcher at the Music Technology Group (MTG) of the
      Pompeu Fabra University. I hold a Ph.D. in Computer Science and
      Engineering from the University of Bologna. My main research interest is
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
      I&apos;m a postdoctoral researcher at the Music Technology Group (MTG) of the
      Pompeu Fabra University. I hold a Ph.D. in Computer Science and
      Engineering from the University of Bologna. My main reasearch interest is
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
      I&apos;m a postdoctoral researcher at the Music Technology Group (MTG) of the
      Pompeu Fabra University. I hold a Ph.D. in Computer Science and
      Engineering from the University of Bologna. My main reasearch interest is
      about Music Information Retrieval (MIR) and Computational Musicology. More
      specifically, I&apos;m interested in the developement of foundational
      models for music understanding, combining audio and symbolic representations. 
      I&apos;m also a musician and a composer.
    </motion.p>
  ),
};

export default bios;
