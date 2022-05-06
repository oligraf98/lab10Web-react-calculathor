import React, { Component } from 'react';

function EqBtn({ dispatch }){
  return (
    <button onClick={() => dispatch({ type: "result" })}>
    =
    </button>
  );
}

export default EqBtn;
