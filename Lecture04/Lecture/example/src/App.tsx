import "./App.css";
import { TextProvider } from "./Providers/TextProvider";
import { useTextContext } from "./Providers/useTextContext";

const GrandChildren = () => {
  const { text } = useTextContext();

  return <div>{text}</div>;
};

const Children = () => {
  return <GrandChildren />;
};

const Sibling1 = () => {
  const { text } = useTextContext();

  return <div>{text}</div>;
};

const Sibling2 = () => {
  const { text, setText } = useTextContext();

  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

const Parent = () => {
  return (
    <div>
      <Sibling1 />
      <Sibling2 />
      <Children />
    </div>
  );
};

function App() {
  return (
    <TextProvider>
      <Parent />
    </TextProvider>
  );
}

export default App;
