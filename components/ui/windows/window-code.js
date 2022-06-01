import { motion } from 'framer-motion';
import CodeAutoTyping from 'react-code-auto-typing';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Fragment } from 'react/cjs/react.production.min';

function WindowCode() {
  const snippet = `function greet(name) {
    return 'Hello, my name is ' + name;
  };
  
  console.log(greet('Andrea'))`;

  return (
    <CodeAutoTyping
      className="min-h-full"
      language="bash"
      syntaxHighlighterProps={{ style: monokai }}
    >
      {snippet}
    </CodeAutoTyping>
  );
}

export default WindowCode;
