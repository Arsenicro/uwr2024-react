import "./App.scss";

import styled from "@emotion/styled";
import { useState } from "react";
import Component1 from "./components/Component1/Component1";

const Button = styled.button<{ backgroundColor: string }>`
  padding: 10px 20px;
  background-color: ${(props) => props.backgroundColor || "red"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
  color: white;

  &:hover {
    background-color: green;
  }
`;

const StyledComponent1 = styled(Component1)<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div className="box">
        <Button
          backgroundColor={color}
          onClick={() => setColor(color === "red" ? "blue" : "red")}
        >
          Button
        </Button>
        <a href="#" className="link">
          Link
        </a>
      </div>
      <div
        css={{
          backgroundColor: "yellow",
          padding: "20px",
          margin: "20px",
          textAlign: "center",
        }}
      >
        Hello
      </div>
      <StyledComponent1 backgroundColor={color} className="container" />
      {/* <div>
        <Component1 />
        <Component2 />
      </div> */}
    </>
  );
}

export default App;
