import useEditTodo from "../api/useEditTodo";
import useGetTodo from "../api/useGetTodo";
import { ITodo } from "../types/Todo.type";
import TodoModalContent from "./TodoModalContent";

interface IProps {
  id: ITodo["id"];
  onClose: () => void;
  initialData: ITodo;
}

const EditTodoModalContent = ({ id, onClose, initialData }: IProps) => {
  const mutation = useEditTodo();

  return (
    <TodoModalContent
      header="Edit Todo"
      onClose={onClose}
      isPending={mutation.isPending}
      initialData={initialData}
      onSubmit={(data) => mutation.mutateAsync({ id, ...data })}
    />
  );
};

function EditTodoModalContentWrapper(props: Omit<IProps, "initialData">) {
  const query = useGetTodo(props.id);

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.data === undefined) {
    return <div>Error...</div>;
  }

  return <EditTodoModalContent {...props} initialData={query.data} />;
}

export default EditTodoModalContentWrapper;
