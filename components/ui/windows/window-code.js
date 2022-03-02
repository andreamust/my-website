import { motion } from "framer-motion";
import CodeAutoTyping from "react-code-auto-typing";
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function WindowCode() {
  const snippet = `function greet(name) {
    return 'Hello, my name is ' + name;
  };
  
  console.log(greet('Andrea'))`;

  return (
    <motion.div
      className=" w-[65vw] min-h-[60vh] rounded-md bg-slate-800"
      animate={{ y: -800, x: 265, scale: 1 }}
      drag
      dragConstraints={{
        right: 1200,
        left: 200,
        bottom: 0,
        top: -1000,
      }}
      initial={{ y: 0, x: 0, scale: 0 }}
      transition={{ duration: 0.4, ease: "easeIn", delay: 0.5 }}
    >
      <CodeAutoTyping
        className="min-h-full"
        language="javascript"
        syntaxHighlighterProps={{ style: monokai }}
      >
        {snippet}
      </CodeAutoTyping>
    </motion.div>
  );
}

export default WindowCode;
