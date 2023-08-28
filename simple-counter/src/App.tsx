import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div data-testid="counter">{count}</div>
        <div>
          <button
            data-testid="minus-button"
            onClick={() => setCount((cnt) => cnt - 1)}
            disabled={disabled}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            onClick={() => setCount((cnt) => cnt + 1)}
            disabled={disabled}
          >
            +
          </button>
        </div>
        <div>
          <button
            data-testid="on/off-button"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setDisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
