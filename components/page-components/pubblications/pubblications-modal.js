import BasicWindow from '../../ui/windows/basic-window';

function PubblicationsModal(props) {
  const { title, content, router } = props;

  return (
    <BasicWindow
      width="w-[50%]"
      height="h-[50%]"
      animate={true}
      closePath="/pubblications/"
      onClose={() => {
        router.push('/pubblications/');
      }}
    >
      <div className="flex flex-col items-center gap-10 w-7/12 p-12">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg">{content}</p>
      </div>
    </BasicWindow>
  );
}

export default PubblicationsModal;
