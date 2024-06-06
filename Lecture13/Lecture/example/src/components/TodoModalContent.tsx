import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useGetTypes from "../api/useGetTypes";
import { ITodo } from "../types/Todo.type";
import { ITodoType } from "../types/TodoType.type";

interface IProps {
  initialData?: ITodo;
  onClose: () => void;
  isPending: boolean;
  onSubmit: (data: {
    body: ITodo["body"];
    typeId: ITodoType["id"];
  }) => Promise<void>;
  types: ITodoType[];
  header: string;
}

function TodoModalContent({
  initialData,
  onClose,
  isPending,
  onSubmit,
  types,
  header,
}: IProps) {
  const [body, setBody] = useState(initialData?.body || "");
  const [type, setType] = useState<ITodoType["id"] | "">(
    initialData?.typeId || ""
  );

  const resetForm = () => {
    setBody(initialData?.body || "");
    setType(initialData?.typeId || "");
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        if (!body || !type) {
          return;
        }

        await onSubmit({ body, typeId: type });
        resetForm();
        onClose();
      }}
    >
      <Typography variant="h6" component="h2">
        {header}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <TextField
          fullWidth
          id="body"
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          disabled={isPending}
        />
        <FormControl fullWidth disabled={isPending}>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            id="type"
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value as ITodoType["id"])}
            disabled={isPending}
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
        <Button fullWidth color="success" type="submit" disabled={isPending}>
          Save
        </Button>
        <Button
          fullWidth
          color="error"
          onClick={() => {
            resetForm();
            onClose();
          }}
          disabled={isPending}
        >
          Close
        </Button>
      </Box>
    </form>
  );
}

function TodoModalContentWrapper(props: Omit<IProps, "types">) {
  const typesQuery = useGetTypes();

  if (typesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (typesQuery.data === undefined) {
    return <div>Error...</div>;
  }

  return <TodoModalContent {...props} types={typesQuery.data} />;
}

export default TodoModalContentWrapper;
