import Link from 'next/link';
import { motion } from 'framer-motion';

const bios = {
  0: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a human being
    </motion.p>
  ),
  1: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a PhD Student in Computer Science and Engineering
    </motion.p>
  ),
  2: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a PhD Student in Computer Science and Engineering at the
      University of Bologna. I&apos;m currently working on the{' '}
      <Link href="https://polifonia-project.eu/">
        <a target={'_blank'}>Polifonia Project</a>
      </Link>
      .
    </motion.p>
  ),
  3: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a PhD Student in Computer Science and Engineering at the
      University of Bologna. My main reasearch interest is about Music
      Information Retrieval (MIR) and Computational Musicology.
    </motion.p>
  ),
  4: (
    <motion.p
      className="font-modern"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      I&apos;m a PhD Student in Computer Science and Engineering at the
      University of Bologna. My main reasearch interest is about Music
      Information Retrieval (MIR) and Computational Musicology. More
      specifically, I&apos;m interested in the multi-modal analysis of harmonic
      data. I&apos;m currently working on the{' '}
      <Link href="https://polifonia-project.eu/">
        <a target={'_blank'}>Polifonia Project</a>
      </Link>
      .
    </motion.p>
  ),
};

export default bios;
