import useAddTodo from "../api/useAddTodo";
import TodoModalContent from "./TodoModalContent";

interface IProps {
  onClose: () => void;
}

const AddTodoModalContent = ({ onClose }: IProps) => {
  const mutation = useAddTodo();

  return (
    <TodoModalContent
      header="Add Todo"
      onClose={onClose}
      isPending={mutation.isPending}
      onSubmit={(data) => mutation.mutateAsync(data)}
    />
  );
};

export default AddTodoModalContent;
