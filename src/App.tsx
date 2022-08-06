import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import './App.css';
import { invoke } from '@tauri-apps/api';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const result = await invoke<string>('greet', { name });
    setMessage(result);
  };
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleChangeName}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
