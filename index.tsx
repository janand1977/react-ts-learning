import React, { Component, memo, useCallback, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Child from './child';
import './style.css';

function App() {
  const [pCount, setPCount] = useState(0);
  const [obj, setCount] = useState({a:'x',b:'y'});

  const parentClick = () => {
    setPCount(pCount + 1);
  };

  // const childClick = () => {
  //   setCount(count + 1);
  // };

  console.log('rendering parent');

  return (
    <div className="App">
      <h1> This is parent </h1>
      <button onClick={parentClick}> ParentCount </button>
      <div>Test </div>
      <Child cProp={pCount}  uCount={setCount}/>
    </div>
  );
}

render(<App />, document.getElementById('root'));
