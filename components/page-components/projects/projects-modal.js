import BasicWindow from '../../ui/windows/basic-window';
import renderCitation from '../../utils/process-pubblications';
import { useState } from 'react';

function ProjectsModal(props) {
  const { content, router } = props;

  return (
    <BasicWindow
      title={content.id}
      width="w-[70%]"
      height="h-[60%]"
      animate={true}
      closePath="/projects/"
      onClose={() => {
        router.push('/projects/');
      }}
    >
      <div className="flex flex-col gap-5 w-full p-12 overflow-scroll scroll-smooth no-scrollbar">
        <h1 className="text-2xl font-modernBold">{content.title}</h1>
        <h3 className="text-xl font-modernBold">Authors</h3>
        <p className="text-md font-modern">{authorList.join(', ')}</p>
        <h3 className="text-xl font-modernBold">Published in</h3>
      </div>
    </BasicWindow>
  );
}

export default ProjectsModal;
