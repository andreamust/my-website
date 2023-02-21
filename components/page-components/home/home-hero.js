import Image from 'next/image';
import HomeIcons from './home-icons';

function HomeHero(props) {
  return (
    <div className="bg-gray-50 dark:bg-gray-400 w-screen h-screen">
      <div className="flex flex-row justify-center align-middle gap-5 md:gap-0 md:pb-24 pt-10">
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
        <div className="flex flex-col justify-center align-middle items-center gap-7 max-w-xl pr-40">
          <h1 className="font-modernBold text-7xl leading-[3.8rem] text-center ml-9 mr-9 md:ml-0 md:mr-0">
            Andrea Poltronieri
          </h1>
          <h2 className="text-3xl text-center font-modernMono ">
            Personal Website
          </h2>
          <HomeIcons />
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default HomeHero;
