import Head from 'next/head';
import Image from 'next/image';
import WindowTerminal from '../components/ui/windows/window-terminal';
import BasicWindow from '../components/ui/windows/basic-window';
import { TerminalContextProvider } from 'react-terminal';
import Background from '../components/ui/windows/background';
import { useState } from 'react';

export default function Terminal(props) {
  const { openState, openHandler } = props;

  return (
    <BasicWindow
      title={'andrea-poltronieiri/terminal'}
      height={'h-[60vh]'}
      width={'w-[65vw]'}
      animate={true}
      openState={openState}
      openHandler={openHandler}
    >
      <TerminalContextProvider>
        <WindowTerminal />
      </TerminalContextProvider>
    </BasicWindow>
  );
}
