import { Tracker } from './Tracker';
import { TransProvider } from './transContext';
import './App.css';

function App() {
  return (
    <TransProvider className="App">
      <Tracker />
    </TransProvider>
  );
}

export default App;
