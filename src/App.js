import logo from './logo.svg';
import './App.css';
import Home from './comp/Home';
import { useRef, useState } from 'react';


function App() {

  const [color, setcolor] = useState(true)

  return (
    <main className={color ? "dark App" : "lite App"}
    >
      <button className='mode' onClick={() => {
        setcolor(color ? false : true)
      }}>Modes</button>
      <Home></Home>
    </main>
  );
}

export default App;
