import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import useGetTodos from "../api/useGetTodos";
import useRemoveTodo from "../api/useRemoveTodo";
import { ITodo } from "../types/Todo.type";
import { ITodoType } from "../types/TodoType.type";
import TodoModal from "./TodoModal";

function Todos() {
  const query = useGetTodos();
  const removeMutation = useRemoveTodo();
  const [editModal, setEditModal] = useState<ITodo["id"] | null>(null);

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 150 },
    { field: "body", headerName: "Body", flex: 1 },
    {
      field: "type",
      headerName: "Type",
      valueGetter: (val: ITodoType) => val.body,
      flex: 1,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => {
            removeMutation.mutate(+params.id);
          }}
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => {
            setEditModal(+params.id);
          }}
        />,
      ],
      width: 150,
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={query.data || []}
        columns={columns}
        loading={query.isFetching || removeMutation.isPending}
      />
      <TodoModal
        open={!!editModal}
        onClose={() => setEditModal(null)}
        mode={{ type: "edit", id: editModal }}
      />
    </div>
  );
}

export default Todos;
