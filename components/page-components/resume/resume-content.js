function ResumeContent(props) {
  const contents = props.data;
  return (
    <div className="flex flex-row">
      {contents.map((content, index) => {
        return (
          <div id={`content-${index}`} key={index} className="flex-1 ">
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default ResumeContent;
