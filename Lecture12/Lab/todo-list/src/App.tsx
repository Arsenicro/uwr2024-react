import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout/Layout";
import TodosProvider from "./providers/TodosProvider/TodosProvider";
import { darkTheme } from "./theme/theme";
import TodoListView from "./views/TodoListView";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TodosProvider>
        <Layout>
          <TodoListView />
        </Layout>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
