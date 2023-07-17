import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';

import { ExpensesProvider } from './src/hooks/useExpenses';
import Navigation from './src/navigation';
import Theme from './src/theme/Theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ExpensesProvider>
        <Navigation />
      </ExpensesProvider>
    </ThemeProvider>
  );
}
