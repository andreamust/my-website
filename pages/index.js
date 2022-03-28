import Head from 'next/head';
import Image from 'next/image';
import WindowCode from '../components/ui/windows/window-code';
import { isMobile, CustomView } from 'react-device-detect';

export default function Home() {
  return (
    <div className="h-screen">
      <CustomView condition={isMobile === false}>
        <WindowCode />
      </CustomView>
    </div>
  );
}
