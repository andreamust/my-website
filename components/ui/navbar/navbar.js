import { motion } from "framer-motion";
import { useState } from "react";
import WindowCode from "../windows/window-code";
import NavApp from "./application";

const apps = ["About", "Resume", "Projects", "Pubblications", "Contact"];
const navPosition = "bottom";

function Navbar() {
  return (
    <div
      className={
        "grid h-screen grid-rows-5 grid-cols-12 pb-2 " +
        (navPosition === "bottom" ? "items-end" : "")
      }
    >
      <ul
        className={
          "flex bg-slate-200 justify-around items-center rounded-xl " +
          (navPosition === "bottom"
            ? "col-start-3 row-start-5 col-end-10 h-14 "
            : "flex-col col-start-1 row-start-2 row-end-5 w-14 ml-2")
        }
      >
        {apps.map((app, index) => {
          return (
            <motion.li
              key={`000${index}`}
              initial={{ opacity: 0, x: "50%", scale: 1.5 }}
              animate={{ opacity: 1, duration: 2, x: 0, scale: 1 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 120,
                delay: index / 6,
              }}
              className="flex flex-col flex-none w-10 h-10 items-center place-content-end"
            >
              <NavApp
                appName={app}
                appIndex={index}
                navPosition={navPosition}
              />
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
