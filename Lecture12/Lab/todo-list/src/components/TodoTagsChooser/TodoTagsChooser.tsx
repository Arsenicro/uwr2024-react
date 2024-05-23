import { Autocomplete, Chip, TextField, capitalize } from "@mui/material";
import { ITodo, todoTags } from "../../types/ITodo.type";

interface IProps {
  tags: ITodo["tags"];
  setTags: (tags: ITodo["tags"]) => void;
}

function TodoTagsChooser({ tags, setTags }: IProps) {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="tags"
      options={todoTags}
      value={tags}
      onChange={(_, newValue) => {
        setTags(newValue);
      }}
      getOptionLabel={(option) => capitalize(option)}
      renderInput={(params) => <TextField {...params} label="Tags" />}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="outlined"
            label={capitalize(option)}
            {...getTagProps({ index })}
            key={option}
          />
        ))
      }
      fullWidth
    />
  );
}

export default TodoTagsChooser;
