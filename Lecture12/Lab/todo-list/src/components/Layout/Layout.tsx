import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            ToDo List
          </Typography>
        </Toolbar>
      </AppBar>

      <Container component="main" fixed>
        <Toolbar />
        <Box
          sx={{
            pt: 3,
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
}

export default Layout;
