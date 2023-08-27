import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <div data-testid="counter">{count}</div>
        <div>
          <button data-testid="minus-button">-</button>
          <button data-testid="plus-button">+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
