function ResumeContent(props) {
  const contents = props.data;
  return contents.map((content, index) => {
    return (
      <div key={index} className="flex-1">
        {content}
      </div>
    );
  });
}

export default ResumeContent;
