import Head from 'next/head';
import Image from 'next/image';
import WindowCode from '../components/ui/windows/window-code';
import { isMobile, CustomView } from 'react-device-detect';
import BasicWindow from '../components/ui/windows/basic-window';

export default function Home() {
  return (
    <div className="h-screen">
      <CustomView condition={isMobile === false}>
        <BasicWindow
          title={'andreamust/terminal'}
          height={'20vh'}
          width={'6rem'}
        >
          <WindowCode />
        </BasicWindow>
      </CustomView>
    </div>
  );
}
