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
      University of Bologna. I&apos;m currently working on the{' '}
      <Link href="https://polifonia-project.eu/">
        <a target={'_blank'}>Polifonia Project</a>
      </Link>
      . I&apos;m also part of the{' '}
      <Link href="http://stlab.istc.cnr.it/stlab/">
        <a target={'_blank'}>Semantic Web Laboratory (STLab)</a>
      </Link>{' '}
      of the Italian National Council for Research (CNR)
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
      University of Bologna. I&apos;m currently working on the{' '}
      <Link href="https://polifonia-project.eu/">
        <a target={'_blank'}>Polifonia Project</a>
      </Link>
      . I&apos;m also part of the{' '}
      <Link href="http://stlab.istc.cnr.it/stlab/">
        <a target={'_blank'}>Semantic Web Laboratory (STLab)</a>
      </Link>{' '}
      of the Italian National Council for Research (CNR). My main reasearch
      interest is about Music Information Retrieval (MIR) and Computational
      Musicology.
    </motion.p>
  ),
};

export default bios;
