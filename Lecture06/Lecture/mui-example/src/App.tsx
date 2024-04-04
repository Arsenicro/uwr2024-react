import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Slider, SliderProps, alpha, styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

// Po to żeby mieć reużywalny komponent

interface StyledSliderProps extends SliderProps {
  success?: boolean;
}

const SuccessSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop !== "success",
})<StyledSliderProps>(({ success, theme }) => ({
  width: 300,
  ...(success && {
    color: theme.palette.success.main,
    "& .MuiSlider-thumb": {
      "&:hover, &.Mui-focusVisible": {
        boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
      },
      "&.Mui-active": {
        boxShadow: `0px 0px 0px 14px ${alpha(
          theme.palette.success.main,
          0.16
        )}`,
      },
    },
  }),
}));

function DialogContentCustom() {
  const [count, setCount] = React.useState(0);

  return (
    <DialogContent>
      <DialogContentText>Count: {count}</DialogContentText>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </DialogContent>
  );
}

function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContentCustom />
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
function App() {
  return (
    <Box>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        sx={{
          bgcolor: "red",
          "&:hover": {
            bgcolor: "blue",
          },
        }}
      >
        Contained
      </Button>
      <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
        Contained
      </Button>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Contained
      </Button>

      <Button variant="outlined">Outlined</Button>
      <AlertDialog />
      <SuccessSlider success />
    </Box>
  );
}

export default App;
