import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import ExampleInput from "./ExampleInput";

const search = (query: object, endpoint: string) => {
  console.log("Searching for:", query, endpoint);
};

function App() {
  const [input, setInput] = useState("");
  const [inputCalls, setInputCalls] = useState(0);
  const [endpoint, setEndoint] = useState("endpoint");

  // useMemo: Trzyma zwróconą wartość funkcji, aż do zmiany zależności
  const query = useMemo(() => {
    return { search: input, page: 1, limit: 10, sort: "asc" };
  }, [input]);

  // useCallback: Trzyma referencję do funkcji, aż do zmiany zależności
  const callbackFetch = useCallback(
    function (query: object) {
      search(query, endpoint);
      setInputCalls((prev) => prev + 1);
    },
    [endpoint]
  );

  const callbackFetch2 = useMemo(() => {
    return function (query: object) {
      search(query, endpoint);
      setInputCalls((prev) => prev + 1);
    };
  }, [endpoint]);

  const debouncedCallbackFetch = useMemo(
    () => debounce(callbackFetch, 700),
    [callbackFetch]
  );

  useEffect(() => {
    debouncedCallbackFetch(query);
  }, [callbackFetch, query, debouncedCallbackFetch]);

  useEffect(() => {
    return () => {
      debouncedCallbackFetch.cancel();
    };
  }, [debouncedCallbackFetch]);

  return (
    <div className="dark:bg-slate-500 dark:text-white min-h-screen flex justify-center">
      <ExampleInput
        input={{
          value: input,
          setValue: setInput,
          numberOfCalls: inputCalls,
        }}
      />
    </div>
  );
}

export default App;
