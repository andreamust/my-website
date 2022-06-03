import Head from 'next/head';
import Image from 'next/image';
import WindowCode from '../components/ui/windows/window-code';
import { isMobile, CustomView } from 'react-device-detect';
import BasicWindow from '../components/ui/windows/basic-window';

export default function Home() {
  return (
    <div>
      <CustomView condition={isMobile === false}>
        <BasicWindow
          title={'andrea-poltronieiri/terminal'}
          height={'20vh'}
          width={'70vw'}
          animate={true}
        >
          <WindowCode />
        </BasicWindow>
      </CustomView>
    </div>
  );
}
