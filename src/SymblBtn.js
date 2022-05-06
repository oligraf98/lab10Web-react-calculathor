import React, { Component } from 'react';

function SymblBtn({ dispatch, symbl }){
  return (
    <button onClick={() => dispatch({ type: "writeSymbl", payload: { symbl }})}>
    {symbl}
    </button>
  );
}

export default SymblBtn;
