import { useState } from "react";

const GrandChildren = ({ text }: { text: string }) => {
  return <div>{text}</div>;
};

const Children = ({ text }: { text: string }) => {
  return <GrandChildren text={text} />;
};

const Sibling1 = ({ text }: { text: string }) => {
  return <div>{text}</div>;
};

const Sibling2 = ({
  text,
  onChange,
}: {
  text: string;
  onChange: (text: string) => void;
}) => {
  return <input value={text} onChange={(e) => onChange(e.target.value)} />;
};

const Parent = ({
  text,
  onChange,
}: {
  text: string;
  onChange: (text: string) => void;
}) => {
  return (
    <div>
      <Sibling1 text={text} />
      <Sibling2 text={text} onChange={onChange} />
      <Children text={text} />
    </div>
  );
};

export const Component = () => {
  const [text, setText] = useState("");

  return <Parent text={text} onChange={setText} />;
};
