import React, { Component } from 'react';

function NumBtn({ dispatch, numbr }){
  return (
    <button onClick={() => dispatch({ type: "writeNumbr", payload: { numbr }})}>
    {numbr}
    </button>
  );
}

export default NumBtn;
