function PageTitle(props) {
  return (
    <div className="bg-gray-300 z-10 dark:bg-gray-900 absolute w-screen">
      <h1 className="font-modernMono text-4xl text-gray-800 text-left pl-9 pt-3 pb-4">
        {props.title}
      </h1>
    </div>
  );
}

export default PageTitle;
