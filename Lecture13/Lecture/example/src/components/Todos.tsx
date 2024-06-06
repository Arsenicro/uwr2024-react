import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { ITodoType } from "../types/TodoType.type";

const todos = [
  {
    id: 1,
    body: "Buy milk",
    typeId: 2,
    type: {
      id: 2,
      body: "Personal",
    },
  },
  {
    id: 2,
    body: "Finish homework",
    typeId: 1,
    type: {
      id: 1,
      body: "Work",
    },
  },
  {
    id: 3,
    body: "Go to the gym",
    typeId: 2,
    type: {
      id: 2,
      body: "Personal",
    },
  },
  {
    id: 4,
    body: "Call mom",
    typeId: 2,
    type: {
      id: 2,
      body: "Personal",
    },
  },
  {
    id: 5,
    body: "Buy a new phone",
    typeId: 3,
    type: {
      id: 3,
      body: "Other",
    },
  },
];

function Todos() {
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
            console.log(`Delete todo with id ${params.id}`);
          }}
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => {
            console.log(`Edit todo with id ${params.id}`);
          }}
        />,
      ],
      width: 150,
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid rows={todos} columns={columns} />
    </div>
  );
}

export default Todos;
