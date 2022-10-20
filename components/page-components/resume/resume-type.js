import { parseData } from '../../utils/filtering';

function ResumeType(props) {
  return (
    <div className=" p-14 h-full flex flex-col justify-center gap-9">
      {props.types.map((type, index) => {
        return (
          <div
            key={index}
            id={`type-${type}`}
            className={`w-12 h-12 text-center rounded-full  ${
              props.type.includes(type) ? 'bg-red-400' : 'bg-blue-400'
            }`}
          >
            <button
              onClick={() => {
                props.typeHandler([type]);
                props.yearHandler(
                  parseData(props.data, 'type', type, 'yearStart')
                );
              }}
            >
              <p className="h-12 text-center">{type}</p>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ResumeType;
