import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <div data-testid="counter">{count}</div>
      </header>
    </div>
  );
}

export default App;
