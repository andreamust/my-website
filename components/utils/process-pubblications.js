import Cite from 'citation-js';

export default function renderCitation(pubblication, template) {
  const cite = new Cite(pubblication);
  const data = cite.data[0];
  // remove url from data
  cite.data[0].URL = '';
  const output = cite.format('bibliography', {
    format: 'text',
    template: template,
    lang: 'en-US',
  });
  return { output, data };
}
