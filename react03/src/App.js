import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [hc, setHc] = useState(false);
  return (
    <div>
      <i className="xi-heart"
        onClick={() => (setNum(num + 1), setHC(!hc))}
        style={{ color: hc && 'blue' }}></i> {num}
    </div >

    //<div onClick={() => setColor(true)}>
    //  <i className="xi-heart" onClick={() => setNum(num + 1)} style={{ color: color && 'blue' }}></i> {num}
    //</div >
  );
}

export default App;
