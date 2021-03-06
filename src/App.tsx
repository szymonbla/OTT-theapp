import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { StateWrapper } from 'state';
import Routing from 'routing/Routing';
import theme from 'common/Theme';

import 'common/styles/global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <StateWrapper>
            <Routing />
          </StateWrapper>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
