import { parseData } from '../../utils/filtering';

function ResumeType(props) {
  return (
    <div className="flex-1 p-14 h-full flex flex-col justify-center gap-9">
      {props.types.map((type, index) => {
        return (
          <div
            key={index}
            id={`type-${type}`}
            className={`w-12 h-12 text-center rounded-full  ${
              props.type.includes(type) ? 'bg-cerise' : 'bg-greypalette-600'
            }`}
          >
            <button
              className="h-full w-full"
              onClick={() => {
                props.typeHandler([type]);
                props.yearHandler(
                  parseData(props.data, 'type', type, 'yearStart')
                );
              }}
            >
              <p className="text-center dark:text-blackpalette-900">{type}</p>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ResumeType;
