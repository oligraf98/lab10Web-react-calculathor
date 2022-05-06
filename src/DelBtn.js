import React, { Component } from 'react';

function DelBtn({ dispatch }){
  return (
    <button onClick={() => dispatch({ type: "bckspace" })}>
    DEL
    </button>
  );
}

export default DelBtn;
