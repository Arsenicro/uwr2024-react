import { createContext, useState } from "react";

export const TextContext = createContext<{
  text: string;
  setText: (text: string) => void;
} | null>(null);

export const TextProvider = ({ children }: { children: React.ReactNode }) => {
  const [text, setText] = useState("");

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};
