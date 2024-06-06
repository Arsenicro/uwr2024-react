import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ITodoType } from "../types/TodoType.type";

interface ITodoModalProps {
  open: boolean;
  onClose: () => void;
}

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

const types = [
  {
    id: 1,
    body: "Work",
  },
  {
    id: 2,
    body: "Personal",
  },
  {
    id: 3,
    body: "Other",
  },
];

function TodoModal({ open, onClose }: ITodoModalProps) {
  const [body, setBody] = useState("");
  const [type, setType] = useState<ITodoType["id"] | "">("");

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log({ body, type });
          }}
        >
          <Typography variant="h6" component="h2">
            Add Todo
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <TextField
              fullWidth
              id="body"
              label="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                labelId="type-label"
                id="type"
                label="Type"
                value={type}
                onChange={(e) => setType(e.target.value as ITodoType["id"])}
              >
                {types.map((type) => (
                  <MenuItem key={type.id} value={type.id}>
                    {type.body}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mt: 2, display: "flex" }}>
            <Button fullWidth color="success" type="submit">
              Save
            </Button>
            <Button fullWidth color="error" onClick={onClose}>
              Close
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}

export default TodoModal;
