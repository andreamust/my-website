import Image from 'next/image';
import HomeIcons from './home-icons';

function HomeHero(props) {
  return (
    <div className="static flex flex-col md:grid md:grid-cols-12 justify-center align-middle gap-5 md:gap-0 bg-gray-50 dark:bg-gray-400 md:h-full md:pb-24">
      <div className="flex flex-col w-full justify-center flex-1 items-center md:col-start-4 lg:col-start-4 md:row-start-2 h-full pt-12">
        <div className="h-64 w-64">
          <Image
            src="/images/ap.jpeg"
            alt="logo"
            layout="responsive"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center align-middle items-center md:col-start-7 lg:col-start-7 md:col-end-11 md:row-start-2 md:row-end-3 gap-7">
        <h1 className="font-modernBold text-7xl leading-[3.8rem] text-center ml-9 mr-9 md:ml-0 md:mr-0">
          Andrea Poltronieri
        </h1>
        <h2 className="text-3xl text-center font-modernMono ">
          Personal Website
        </h2>
        <HomeIcons />
      </div>
      {props.children}
    </div>
  );
}

export default HomeHero;
