import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

export function App(props) {
  const [tdata, settData] = useState('st');
  const [obj, setObj] = useState({ a: 'a', b: 'b' });

  function changeData() {
    setObj({ a: 'xxx', b: 'yyy' });
  }
  return (
    <div className="App">
      <TestComp data={tdata} newdata={obj} click={changeData} />
    </div>
  );
}

export function TestComp(props) {
  const shot = () => {
    console.log('shot');
  };
  return (
    <div className="Comp">
      <h1>{props.data}</h1>
      <h1>{props.newdata.a}</h1>
      <button onClick={props.click}>Change</button>
      <button onClick={shot}>Change</button>
      <h1>{props.newdata.b}</h1>
    </div>
  );
}

// Log to console
console.log('Hello console');

render(<App />, document.getElementById('root'));
