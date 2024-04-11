import React from "react";
import AccordionDemo from "./components/AccordionDemo/AccordionDemo";
import PopoverDemo from "./components/PopoverDemo/PopoverDemo";

function App() {
  let counter1 = 0;
  const [counter2, setCounter2] = React.useState(0);
  const counter = React.useRef(0);
  const ref = React.useRef<HTMLInputElement>(null);

  console.log("Rendering App");
  console.log(counter);

  return (
    <div>
      <PopoverDemo />
      <AccordionDemo />
      <button
        onClick={() => {
          counter1++;
        }}
      >
        Counter 1: {counter1}
      </button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Counter 2: {counter2}
      </button>
      <button
        onClick={() => {
          counter.current++;
        }}
      >
        Counter 3: {counter.current}
      </button>
      <br />
      <input ref={ref} />{" "}
      <button onClick={() => ref.current?.focus()}>Focus</button>
    </div>
  );
}

export default App;
