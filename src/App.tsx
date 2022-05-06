import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Routing from 'routing/Routing';
import theme from 'common/Theme';

import 'common/styles/global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routing />
      </Router>
    </ThemeProvider>
  );
}

export default App;
