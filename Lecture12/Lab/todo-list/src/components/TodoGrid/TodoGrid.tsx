import {
  Cancel as CancelIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import { capitalize } from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModes,
  GridRowModesModel,
} from "@mui/x-data-grid";
import React from "react";
import useTodos from "../../providers/TodosProvider/useTodos";
import {
  ITags,
  ITodo,
  todoPriorities,
  todoStatuses,
} from "../../types/ITodo.type";

function TodoGrid() {
  const { todos, editTodo, removeTodo } = useTodos();

  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: ITodo["id"]) => () => {
    removeTodo(id);
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const processRowUpdate = (newRow: ITodo) => {
    editTodo(newRow.id, {
      priority: newRow.priority,
      status: newRow.status,
    });
    return newRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef<ITodo>[] = [
    {
      field: "name",
      headerName: "Todo Name",
      sortable: true,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: true,
      editable: true,
      type: "singleSelect",
      valueOptions: todoStatuses.map((status) => ({
        value: status,
        label: status.split("-").map(capitalize).join(" "),
      })),
      flex: 1,
    },
    {
      field: "priority",
      headerName: "Priority",
      sortable: true,
      editable: true,
      type: "singleSelect",
      valueOptions: todoPriorities.map((priority) => ({
        value: priority,
        label: capitalize(priority),
      })),
      flex: 1,
    },
    {
      field: "tags",
      headerName: "Tags",
      sortable: false,
      valueFormatter: (value: ITags[]) => {
        if (value.length === 0) {
          return "No tags";
        }
        return value.map((tag) => capitalize(tag)).join(", ");
      },
      flex: 1,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id, row }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(row.id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <DataGrid
      rows={todos}
      columns={columns}
      editMode="row"
      rowModesModel={rowModesModel}
      onRowModesModelChange={handleRowModesModelChange}
      onRowEditStop={handleRowEditStop}
      processRowUpdate={processRowUpdate}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10]}
      disableRowSelectionOnClick
    />
  );
}

export default TodoGrid;
