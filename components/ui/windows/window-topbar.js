function WindowTopBar(props) {
  return (
    <div className="flex flex-row bg-slate-200 h-1/6 rounded-t-md text-center text-base justify-between align-middle">
      <div className="flex-auto">{props.title}</div>
      <div className="flex flex-row left-0 basis-1/12 self-center px-2">
        <div className="flex-none bg-green-600 h-5 w-5 rounded-2xl self-end mx-[2px]"></div>
        <div className="flex-none bg-yellow-300 h-5 w-5 rounded-2xl self-end mx-[2px]"></div>
        <div className="flex-none bg-red-600 h-5 w-5 rounded-2xl self-end mx-[2px]"></div>
      </div>
    </div>
  );
}

export default WindowTopBar;
