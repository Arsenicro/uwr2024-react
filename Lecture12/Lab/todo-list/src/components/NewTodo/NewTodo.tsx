import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  capitalize,
} from "@mui/material";
import { useState } from "react";
import useTodos from "../../providers/TodosProvider/useTodos";
import { ITodo, ITodoPriority, todoPriorities } from "../../types/ITodo.type";
import TodoTagsChooser from "../TodoTagsChooser/TodoTagsChooser";

function NewTodo() {
  const { addTodo } = useTodos();

  const [todoName, setTodoName] = useState<ITodo["name"]>("");
  const [priority, setPriority] = useState<ITodo["priority"] | undefined>();
  const [tags, setTags] = useState<ITodo["tags"]>([]);
  const [errorFields, setErrorFields] = useState<string[]>([]);

  function clearState() {
    setTodoName("");
    setPriority(undefined);
    setTags([]);
  }

  function handleAddTodo() {
    setErrorFields([]);
    if (!todoName) {
      setErrorFields(["name"]);
    }
    if (!priority) {
      setErrorFields((fields) => [...fields, "priority"]);
    }
    if (!todoName || !priority) {
      return;
    }

    addTodo({
      name: todoName,
      priority,
      tags,
    });
    clearState();
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 3,
        mb: 2,
      }}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo();
      }}
    >
      <Box sx={{ display: "flex", gap: 3, flexDirection: ["column", "row"] }}>
        <FormControl fullWidth error={errorFields.includes("name")}>
          <TextField
            id="name"
            label="Todo Name"
            variant="outlined"
            fullWidth
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            error={errorFields.includes("name")}
          />
        </FormControl>
        <FormControl fullWidth error={errorFields.includes("priority")}>
          <InputLabel id="priority">Priority</InputLabel>
          <Select
            label="Priority"
            id="priority"
            variant="outlined"
            value={priority ?? ""}
            onChange={(e) => setPriority(e.target.value as ITodoPriority)}
            error={errorFields.includes("priority")}
            fullWidth
          >
            {todoPriorities.map((p) => (
              <MenuItem key={p} value={p}>
                {capitalize(p)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: 3, flexDirection: ["column", "row"] }}>
        <FormControl fullWidth>
          <TodoTagsChooser tags={tags} setTags={(tags) => setTags(tags)} />
        </FormControl>
      </Box>

      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </Box>
  );
}

export default NewTodo;
