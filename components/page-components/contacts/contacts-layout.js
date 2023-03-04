import HomeIcons from '../home/home-icons';

function ContactsLayout(props) {
  return (
    <div className="flex flex-col w-screen h-screen items-center  overflow-scroll">
      <div className="flex flex-col w-screen h-screen items-center">
        <h1 className="font-modernBold text-4xl">Let&apos;s get in touch!</h1>
        <div className="flex flex-row gap-48 pt-48">
          <div className="flex flex-col items-center gap-10">
            <h2 className="font-modernMono text-xl">Just email me</h2>
            <a href="mailto:andrea.poltronieri2@unibo.it">
              <p className="text-xl font-modernMono">
                andrea.poltronieri2@unibo.it
              </p>
            </a>
          </div>
          <div className="flex flex-col items-center gap-10">
            <h2 className="font-modernMono text-xl">Or find me on</h2>
            <HomeIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsLayout;
