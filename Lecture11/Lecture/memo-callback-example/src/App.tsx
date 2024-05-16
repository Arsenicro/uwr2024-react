import { useEffect, useState } from "react";
import ExampleInput from "./ExampleInput";

const search = (query: object) => {
  console.log("Searching for:", query);
};

function App() {
  const [input, setInput] = useState("");
  const [inputCalls, setInputCalls] = useState(0);

  useEffect(() => {
    function fetchData(input: string) {
      search({ query: input });
      setInputCalls((prev) => prev + 1);
    }

    fetchData(input);
  }, [input]);

  return (
    <ExampleInput
      input={{
        value: input,
        setValue: setInput,
        numberOfCalls: inputCalls,
      }}
    />
  );
}

export default App;
