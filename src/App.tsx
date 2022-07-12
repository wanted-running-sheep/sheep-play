import Router from '@/routes';
import { MoiveContextProvider } from './context/MovieContext';

const App = () => {
  return (
    <MoiveContextProvider>
      <Router />
    </MoiveContextProvider>
  );
};

export default App;
