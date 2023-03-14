import WindowTerminal from '../window-terminal';
import BasicWindow from '../basic-window';
import { TerminalContextProvider } from 'react-terminal';

export default function Terminal(props) {
  return (
    // center the window
    <div className="absolute flex flex-col items-center justify-center h-screen w-screen">
      <BasicWindow
        title={'andrea-poltronieiri/terminal'}
        height={'h-[60vh]'}
        width={'w-[65vw]'}
        animate={true}
        showTerminal={props.showTerminal}
      >
        <TerminalContextProvider>
          <WindowTerminal />
        </TerminalContextProvider>
      </BasicWindow>
    </div>
  );
}
