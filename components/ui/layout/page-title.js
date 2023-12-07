function PageTitle(props) {
  return (
    <div className="bg-greypalette-600 z-10 dark:bg-blackpalette-900 absolute w-screen">
      <h1 className="font-modernMono text-4xl dark:bg-blackpalette-900 dark:text-lime text-left pl-9 pt-3 pb-4">
        {props.title}
      </h1>
    </div>
  );
}

export default PageTitle;
