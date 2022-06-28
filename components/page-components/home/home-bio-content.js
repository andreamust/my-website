import Link from 'next/link';

const bios = {
  0: <p className="font-modernMono">I'm a human being</p>,
  1: (
    <p className="font-modern">
      I'm a PhD Student in Computer Science and Engineering
    </p>
  ),
  2: (
    <p className="font-modern">
      I'm a PhD Student in Computer Science and Engineering at the University of
      Bologna. I'm currently working on the{' '}
      <Link href="https://polifonia-project.eu/">
        <a target={'_blank'}>Polifonia Project</a>
      </Link>
      .
    </p>
  ),
  3: (
    <p className="font-modern">
      I'm a PhD Student in Computer Science and Engineering at the University of
      Bologna. I'm currently working on the{' '}
      <Link href="https://polifonia-project.eu/">
        <a target={'_blank'}>Polifonia Project</a>
      </Link>
      . I'm also part of the{' '}
      <Link href="http://stlab.istc.cnr.it/stlab/">
        <a target={'_blank'}>Semantic Web Laboratory (STLab)</a>
      </Link>{' '}
      of the Italian National Council for Research (CNR)
    </p>
  ),
  4: (
    <p className="font-modern">
      I'm a PhD Student in Computer Science and Engineering at the University of
      Bologna. I'm currently working on the{' '}
      <Link href="https://polifonia-project.eu/">
        <a target={'_blank'}>Polifonia Project</a>
      </Link>
      . I'm also part of the{' '}
      <Link href="http://stlab.istc.cnr.it/stlab/">
        <a target={'_blank'}>Semantic Web Laboratory (STLab)</a>
      </Link>{' '}
      of the Italian National Council for Research (CNR). My main reasearch
      interest is about Music Information Retrieval (MIR) and Computational
      Musicology.
    </p>
  ),
};

export default bios;
