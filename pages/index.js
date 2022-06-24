import Head from 'next/head';
import Image from 'next/image';
import WindowTerminal from '../components/ui/windows/window-terminal';
import BasicWindow from '../components/ui/windows/basic-window';
import { TerminalContextProvider } from 'react-terminal';
import Background from '../components/ui/windows/background';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
      <Background>
        <BasicWindow
          title={'andrea-poltronieiri/terminal'}
          height={'h-[60vh]'}
          width={'w-[65vw]'}
          animate={true}
          openState={isOpen}
          openHandler={setIsOpen}
        >
          <TerminalContextProvider>
            <WindowTerminal />
          </TerminalContextProvider>
        </BasicWindow>
      </Background>
    </div>
  );
}
