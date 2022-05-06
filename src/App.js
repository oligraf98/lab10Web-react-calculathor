import React, { Component } from 'react';
import { useReducer } from "react";
import {Howl, Howler} from "howler";

import NumBtn from "./NumBtn.js";
import SymblBtn from "./SymblBtn.js";
import CBtn from "./CBtn.js";
import DelBtn from "./DelBtn.js";
import EqBtn from "./EqBtn.js";
import PMBtn from "./PMBtn.js";



const sound = new Howl({
  src: ["thunder.mp3"]
});

function reducer(state, { type, payload }) {


  switch(type) {
    case 'writeNumbr':
    if (state.overwrite == true){
      return{
        ...state,
        overwrite: false,
        inputScreen: payload.numbr
      }

    }
    if(payload.numbr === "0" && state.inputScreen === "0"){
      return state;
    }
    if (payload.numbr === "." && state.inputScreen.includes(".")){
      return state;
    }
    try {
      if(state.inputScreen.length === 9){
        return state;
      }
    } catch (error) {

    }


    return {
      ...state,
      inputScreen: `${state.inputScreen || ""}${payload.numbr}`,
    }
    case 'bckspace':
      if (state.overwrite) {
        return{
          ...state,
          overwrite: false,
          inputScreen: null
        }
      }

      if (state.inputScreen == null) return state

      if(state.inputScreen.length === 1) {
        return{}
      }

      return {
        ...state,
        inputScreen: state.inputScreen.slice(0, -1)
      }
    case 'clear':
      return {}
    case 'writeSymbl':
      if(state.inputScreen == null && state.secondScreen == null){
        return state
      }

      if (state.inputScreen == null){
        return {
          ...state,
          operation: payload.symbl
        }
      }

      if (state.secondScreen == null) {
        return {
          ...state,
          operation: payload.symbl,
          secondScreen: state.inputScreen,
          inputScreen: null
        }
      }

      return {
        ...state,


        secondScreen: calculate(state),
        operation: payload.symbl,
        inputScreen: null
      }
    case 'result':
      sound.play();
      if (state.inputScreen == null && state.secondScreen == null) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        secondScreen: null,
        operation: null,
        inputScreen: calculate(state)
      }
    case 'changeSign':
      if (state.inputScreen == null) return state
      if (state.inputScreen.includes("-")){
        return{
          ...state,
          inputScreen: state.inputScreen.slice(1)
        }
      } else {
        return{
          ...state,
          inputScreen: `-${state.inputScreen}`
        }
      }



  }
}

function calculate( { inputScreen, secondScreen, operation } ) {
  const firstN = parseFloat(secondScreen)
  const secondN = parseFloat(inputScreen)
  if (isNaN(firstN) || isNaN(secondN)) return ""
  let result = ""
  switch(operation) {
    case "+":
      result = firstN + secondN
      break
    case "-":
      result = firstN - secondN
      break
    case "*":
      result = firstN * secondN
      break
    case "÷":
      result = firstN / secondN
      break
    case "%":
      result = firstN % secondN

  }

  return (Math.round(result * 100) / 100).toString()
}


function checkLength(num) {
  if (num == null) return
  const [integer, decimal] = num.split(".");
  if(num.length > 9){

    if(integer.length > 9){
      return "ERROR";
    }else {

      return integer;
    }
  }

  return num
}

function App(){
  const [{inputScreen, secondScreen, operation}, dispatch] = useReducer(reducer, {})

  return (
    <div class="calculator-box">
      <div class="output">
        <div class="secondScreen">{secondScreen} {operation}</div>
        <div class="inputScreen">{checkLength(inputScreen)}</div>
      </div>

      <CBtn dispatch={dispatch}/>
      <DelBtn dispatch={dispatch}/>
      <SymblBtn symbl="%" dispatch={dispatch}/>
      <SymblBtn symbl="÷" dispatch={dispatch}/>
      <NumBtn numbr="7" dispatch={dispatch}/>
      <NumBtn numbr="8" dispatch={dispatch}/>
      <NumBtn numbr="9" dispatch={dispatch}/>
      <SymblBtn symbl="*" dispatch={dispatch}/>
      <NumBtn numbr="4" dispatch={dispatch}/>
      <NumBtn numbr="5" dispatch={dispatch}/>
      <NumBtn numbr="6" dispatch={dispatch}/>
      <SymblBtn symbl="-" dispatch={dispatch}/>
      <NumBtn numbr="1" dispatch={dispatch}/>
      <NumBtn numbr="2" dispatch={dispatch}/>
      <NumBtn numbr="3" dispatch={dispatch}/>
      <SymblBtn symbl="+" dispatch={dispatch}/>
      <NumBtn numbr="." dispatch={dispatch}/>
      <NumBtn numbr="0" dispatch={dispatch}/>
      <EqBtn dispatch={dispatch}/>
      <PMBtn dispatch={dispatch}/>
    </div>
  );
}

export default App;
