import React, { Component, memo, useCallback, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


function Child(props) {
  const [state, setState] = useState("state");

  const loadDataOnlyOnce = useCallback(() => {
    console.log(`I need ${state}!!`);
  }, [state]);

  useEffect(() => {
      loadDataOnlyOnce(); // // this will fire only when loadDataOnlyOnce-reference changes
  }, [loadDataOnlyOnce]);

  const updateClick = () => {
    console.log('updateClick called');
    props.uCount(props.cProp + 1);
  };
  console.log('rendering child');
  return (
    <div>
      <button onClick={updateClick}>ChildButton</button>
      Child Prop is -{props.cProp}
    </div>
  );
}

export default memo(Child);
