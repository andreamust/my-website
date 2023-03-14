import WindowTerminal from '../window-terminal';
import BasicWindow from '../basic-window';
import { TerminalContextProvider } from 'react-terminal';

export default function Terminal(props) {
  return (
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
  );
}
