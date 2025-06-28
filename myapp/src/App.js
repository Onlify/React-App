import {useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function handleAdd(){
    setCount("OWWWaaW TOO BAD");
  }
  function handleSub(){
    setCount(count - 1);
  }
  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleSub} className='sub'>Subtract</button>
        <button onClick={handleAdd} className='add'>Add</button>
      </div>
    </div>
  )
}

export default App

