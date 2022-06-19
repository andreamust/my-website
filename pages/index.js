import Head from 'next/head';
import Image from 'next/image';
import WindowCode from '../components/ui/windows/window-terminal';
import { isMobile, CustomView } from 'react-device-detect';
import BasicWindow from '../components/ui/windows/basic-window';
import { TerminalContextProvider } from 'react-terminal';

export default function Home() {
  return (
    <div>
      <CustomView condition={isMobile === false}>
        <BasicWindow
          title={'andrea-poltronieiri/terminal'}
          height={'h-[50vh]'}
          width={'w-[70vw]'}
          animate={true}
        >
          <TerminalContextProvider>
            <WindowCode />
          </TerminalContextProvider>
        </BasicWindow>
      </CustomView>
    </div>
  );
}
