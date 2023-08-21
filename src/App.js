import Topbar from "./scenes/global/Topbar";
import { colourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider} from "@mui/module";
function App() {
  const [theme, colourMode] = useMode();

  return (
    <colourModeContext.Provider value ={colourMode}>
    <ThemeProvider theme = {theme}>
    <CssBaseline/>
    <div className="app">
      <main className="content">
        <Topbar />
      </main>
    </div>
    </ThemeProvider>
    </colourModeContext.Provider>
  );
}

export default App;
