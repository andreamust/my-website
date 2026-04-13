import Cite from 'citation-js';

export default function renderCitation(publication, template) {
  const cite = new Cite(publication);
  const data = cite.data[0];
  // remove url from data
  cite.data[0].URL = '';
  const output = cite.format(template, {
    format: 'text',
    template: 'apa',
    lang: 'en-US',
  });
  return { output, data };
}
