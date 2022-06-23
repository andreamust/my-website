import Image from 'next/image';

function HomeHero(props) {
  return (
    <div className="relative h-full flex flex-col md:grid md:grid-cols-12 md:grid-rows-6 justify-center align-middle gap-36 bg-gray-50 dark:bg-gray-400">
      <div className="flex flex-col justify-center items-center md:col-start-4 md:row-start-2 md:col-end-6 md:row-end-4">
        <Image src="/images/ap.jpeg" alt="logo" width={300} height={300} />
      </div>
      <div className="flex flex-col justify-center align-middle items-center md:col-start-7 md:col-end-10 md:row-start-2 md:row-end-4">
        <h1 className="text-7xl text-center">Andrea Poltronieri</h1>
        <h2 className="text-3xl text-center">Personal Website</h2>
      </div>
      <div className=" md:col-start-4 md:col-end-10 md:row-start-4 md:row-end-5 justify-center">
        <p className=" text-center text-lg">This is my bio.</p>
      </div>
    </div>
  );
}

export default HomeHero;
