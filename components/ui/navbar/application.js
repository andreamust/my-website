import { GiBookshelf } from "react-icons/gi";
import { DiTerminal, DiPython, DiTrello, DiGithubBadge } from "react-icons/di";
import { useState } from "react";
import { motion } from "framer-motion";

const IconNames = [DiTerminal, DiPython, DiTrello, GiBookshelf, DiGithubBadge];

function NavApp(props) {
  const [viewBaloon, setViewBaloon] = useState(false);
  const Icon = IconNames[props.appIndex];
  return (
    <div
      className={
        "flex gap-5 flex-none w-10 h-10 items-center " +
        (props.navPosition === "bottom"
          ? "flex-col place-content-end"
          : "flex-row place-content-end")
      }
    >
      <div
        className={`${
          viewBaloon === props.appIndex ? "visible" : "invisible"
        } ${
          props.navPosition === "bottom"
            ? "flex-none flex order-first min-w-[5vw] h-8 bg-slate-400 px-2 rounded-lg text-center place-content-center duration-155 justify-center items-center text-md"
            : "flex-none flex order-first min-w-[5vw] h-8 bg-slate-400 px-2 rounded-lg text-center place-content-center duration-155 justify-center items-center text-md"
        } `}
      >
        <div className="absolute w-0 h-0 border-t-slate-400 border-8 border-transparent bottom-[110%]"></div>
        {props.appName}
      </div>
      <motion.div
        className="flex-none order-last w-full h-full"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 1.2, color: "gray" }}
        whileFocus={{ scale: 1.2 }}
      >
        <Icon
          className="w-full h-full"
          onMouseEnter={() => {
            setViewBaloon(props.appIndex);
          }}
          onMouseLeave={() => {
            setViewBaloon(false);
          }}
        />
      </motion.div>
    </div>
  );
}

export default NavApp;
