function ProjectBlock(props) {
  const {
    title,
    short_title,
    link,
    description,
    year,
    type,
    tags,
    image,
    image_caption,
  } = props.data;
  return (
    <div className="flex flex-col items-center border-gray-900">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    </div>
  );
}

export default ProjectBlock;
