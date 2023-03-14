function PageTitle(props) {
  return (
    <div className=" relative bg-gray-300/[0.8] z-50">
      <h1 className="font-modernMono text-4xl text-gray-800 text-left pl-9 pt-3 pb-4">
        {props.title}
      </h1>
    </div>
  );
}

export default PageTitle;
