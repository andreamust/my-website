import HomeIcons from '../home/home-icons';

function ContactsLayout(props) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="font-modernBold text-6xl text-center">
        Let&apos;s get in touch!
      </h1>
      <div className="flex flex-col md:flex-row gap-16 md:gap-36 pt-20 md:pt-32 mb-32">
        <div className="flex flex-col items-center gap-3 md:gap-8">
          <h2 className=" flex font-modernMono text-xl self-center">
            Just email me
          </h2>
          <a href="mailto:andrea.poltronieri2@unibo.it">
            <p className="text-xl font-modernMono">
              andrea.poltronieri2@unibo.it
            </p>
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 md:gap-8">
          <h2 className="font-modernMono text-xl">Or find me on</h2>
          <HomeIcons />
        </div>
      </div>
    </div>
  );
}

export default ContactsLayout;
