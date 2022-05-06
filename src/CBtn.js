import React, { Component } from 'react';

function CBtn({ dispatch }){
  return (
    <button onClick={() => dispatch({ type: "clear" })}>
    C
    </button>
  );
}

export default CBtn;
