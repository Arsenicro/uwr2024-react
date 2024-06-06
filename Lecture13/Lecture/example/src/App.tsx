import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { useState } from "react";
import TodoModal from "./components/TodoModal";
import Todos from "./components/Todos";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Todos />
      <TodoModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <Fab
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        aria-label={"Add"}
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

export default App;
