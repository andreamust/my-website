import Image from "next/image";
import HomeIcons from "./home-icons";

function HomeHero(props) {
  return (
    <div className="flex flex-col w-screen h-full gap-7 items-center justify-center pb-28 sm:pb-0">
      <div className="flex flex-col md:flex-row items-center gap-2 pb-5 w-8/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">
        <div className="flex flex-col flex-initial w-1/2 items-center h-full pt-12">
          <div className="h-64 w-64 relative rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/ap.jpeg"
              alt="logo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority={true}
            />
          </div>
        </div>
        <div className="flex flex-col flex-initial w-1/2 justify-center align-middle items-center gap-7 max-w-xl ">
          <h1 className="font-modernBold text-7xl leading-[3.8rem] text-center ml-9 mr-9 md:ml-0 md:mr-0">
            Andrea Poltronieri
          </h1>
          <h2 className="text-3xl text-center circle-sketch-highlight font-modernMono text-cerise">
            MIR Researcher
          </h2>
          <HomeIcons />
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default HomeHero;
