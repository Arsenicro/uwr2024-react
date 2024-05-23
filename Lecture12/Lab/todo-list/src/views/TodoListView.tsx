import { Box } from "@mui/material";
import NewTodo from "../components/NewTodo/NewTodo";
import TodoGrid from "../components/TodoGrid/TodoGrid";

function TodoListView() {
  return (
    <Box sx={{ height: "631px", width: "100%" }}>
      <NewTodo />
      <TodoGrid />
    </Box>
  );
}

export default TodoListView;
