function ResumeType(props) {
  const types = props.data;
  return (
    <div className="h-full flex flex-col justify-center gap-9">
      {types.map((type, index) => {
        return (
          <div
            key={index}
            id={`type-${index}`}
            className={`w-12 h-12 text-center rounded-full  ${
              props.type === type ? 'bg-red-400' : 'bg-blue-400'
            }`}
          >
            <button onClick={() => props.typeHandler(type)}>
              <p className="h-12 text-center">{type}</p>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ResumeType;
