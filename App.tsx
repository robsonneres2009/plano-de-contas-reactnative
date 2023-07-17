import { ThemeProvider } from "styled-components";
import Theme from "./src/theme/Theme";
import Navigation from "./src/navigation";
import "react-native-gesture-handler";
import { ExpensesProvider } from "./src/hooks/useExpenses";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ExpensesProvider>
        <Navigation />
      </ExpensesProvider>
    </ThemeProvider>
  );
}
