import Image from 'next/image';

function HomeHero(props) {
  return (
    <div className="flex flex-row justify-center align-middle dark:bg-gray-700">
      <div className="flex flex-col justify-center items-center">
        <Image src="/images/ap.jpeg" alt="logo" width={200} height={200} />
      </div>
      <div>
        <h1 className="text-xl text-center">Andrea Poltronieri's</h1>
        <h2 className="text-lg text-center">Personal Website</h2>
      </div>
    </div>
  );
}

export default HomeHero;
