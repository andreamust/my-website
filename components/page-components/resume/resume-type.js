function ResumeType(props) {
  return (
    <div className="h-full flex flex-col justify-center gap-9">
      <div
        className={`w-12 h-12 text-center rounded-full  ${
          props.type === 'work' ? 'bg-red-400' : 'bg-blue-400'
        }`}
      >
        <button onClick={() => props.typeHandler('work')}>
          Work Experiene
        </button>
      </div>
      <div
        className={`w-12 h-12 text-center rounded-full  ${
          props.type === 'education' ? 'bg-red-400' : 'bg-blue-400'
        }`}
      >
        <button onClick={() => props.typeHandler('education')}>
          Education
        </button>
      </div>
      <div
        className={`w-12 h-12 text-center rounded-full  ${
          props.type === 'other' ? 'bg-red-400' : 'bg-blue-400'
        }`}
      >
        <button onClick={() => props.typeHandler('other')}>Other</button>
      </div>
    </div>
  );
}

export default ResumeType;
