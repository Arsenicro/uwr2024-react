//import classes from "./styles.module.scss";

import styled from "@emotion/styled";

function Component1({ className }: { className?: string }) {
  return <div className={className}>Component1</div>;
}

export default styled(Component1)<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
