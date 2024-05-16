import Input from "./components/Input";

interface IInput {
  value: string;
  setValue: (value: string) => void;
  numberOfCalls: number;
}

function ExampleInput({ input }: { input: IInput }) {
  return (
    <div>
      <Input
        type="text"
        value={input.value}
        onChange={(e) => input.setValue(e.target.value)}
        required
      />
      Number of Calls: {input.numberOfCalls}
    </div>
  );
}

export default ExampleInput;
