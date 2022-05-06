import React, { Component } from 'react';

function PMBtn({ dispatch }){
  return (
    <button  onClick={() => dispatch({ type: "changeSign" })}>
    -/+
    </button>
  );
}

export default PMBtn;
