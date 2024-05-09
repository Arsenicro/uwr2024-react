function Slow() {
  const elements = Array.from({ length: 50000 }, (_, i) => <>Element {i}</>);
  return elements;
}

export default Slow;
