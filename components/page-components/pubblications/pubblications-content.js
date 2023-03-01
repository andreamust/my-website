import Cite from 'citation-js';

function PubblicationsContent(props) {
  const pubblications = props.pubblications.records;

  return (
    <div className="flex flex-col items-center gap-10 w-7/12">
      {pubblications.reverse().map((pubblication) => {
        const cite = new Cite(pubblication);
        const url = cite.data[0].URL;
        // remove url from data
        cite.data[0].URL = '';
        const output = cite.format('bibliography', {
          format: 'text',
          template: 'apa',
          lang: 'en-US',
        });
        return <p>{output}</p>;
      })}
    </div>
  );
}

export default PubblicationsContent;
