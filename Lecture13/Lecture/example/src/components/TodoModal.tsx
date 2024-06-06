import { Box, Modal } from "@mui/material";
import { ITodo } from "../types/Todo.type";
import AddTodoModalContent from "./AddTodoModalContent";
import EditTodoModalContentWrapper from "./EditTodoModalContent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
} as const;

interface ITodoModalProps {
  open: boolean;
  onClose: () => void;
  mode: { type: "add" } | { type: "edit"; id: ITodo["id"] | null };
}

function TodoModalContent({ onClose, mode }: Omit<ITodoModalProps, "open">) {
  if (mode.type === "add") {
    return <AddTodoModalContent onClose={onClose} />;
  }

  if (mode.type === "edit" && mode.id) {
    return (
      <EditTodoModalContentWrapper
        key={mode.id}
        onClose={onClose}
        id={mode.id}
      />
    );
  }

  return null;
}

function TodoModal({ open, onClose, mode }: ITodoModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <TodoModalContent onClose={onClose} mode={mode} />
      </Box>
    </Modal>
  );
}

export default TodoModal;
