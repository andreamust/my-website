import Image from 'next/image';

function HomeHero(props) {
  return (
    <div className="relative flex flex-col md:grid md:grid-cols-12 md:grid-rows-6 justify-center align-middle gap-9 md:gap-24 bg-gray-50 dark:bg-gray-400">
      <div className="flex flex-col justify-center flex-1 items-center md:col-start-4 md:row-start-2 md:col-end-6 md:row-end-4 h-96 w-96 pt-12">
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
      <div className="flex flex-col justify-center align-middle items-center md:col-start-6 md:col-end-11 md:row-start-2 md:row-end-4">
        <h1 className=" font-modern text-7xl leading-tight text-center ml-9 mr-9 md:ml-0 md:mr-0">
          Andrea Poltronieri
        </h1>
        <h2 className="text-3xl text-center">Personal Website</h2>
      </div>
    </div>
  );
}

export default HomeHero;
