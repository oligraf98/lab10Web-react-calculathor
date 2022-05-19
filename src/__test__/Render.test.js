import React from "react";
import  ReactDOM  from "react-dom";
import {Howl, Howler} from "howler";

import NumBtn from "../NumBtn.js";
import SymblBtn from "../SymblBtn.js";
import CBtn from "../CBtn.js";
import DelBtn from "../DelBtn.js";
import EqBtn from "../EqBtn.js";
import PMBtn from "../PMBtn.js";


it("NumBtn renderiza sin problema", ()=>{
    const div = document.createElement('div');
    ReactDOM.render( <NumBtn numbr="7" dispatch={"writeNumbr"}/> , div)
})

it("SymblBtn hace render sin problema", ()=>{
    const div = document.createElement('div');
    ReactDOM.render( <SymblBtn numbr="+" dispatch={"writeSymbl"}/> , div)
})

it("CLRBtn renderiza sin problema", ()=>{
    const div = document.createElement('div');
    ReactDOM.render( <PMBtn numbr="+" dispatch={"changeSign"}/> , div)
})

it("CBtn renderiza sin problema", ()=>{
    const div = document.createElement('div');
    ReactDOM.render( <CBtn numbr="C" dispatch={"clear"}/> , div)
})

it("DelBtn renderiza sin problema", ()=>{
    const div = document.createElement('div');
    ReactDOM.render( <DelBtn numbr="DEL" dispatch={"bckspace"}/> , div)
})

it("EqBtn renderiza sin problema", ()=>{
    const div = document.createElement('div');
    ReactDOM.render( <EqBtn numbr="=" dispatch={"result"}/> , div)
})

it("PMBtn renderiza sin problema", ()=>{
    const div = document.createElement('div');
    ReactDOM.render( <PMBtn numbr="+" dispatch={"changeSign"}/> , div)
})

it("Sonido de trueno renderiza sin problema", ()=>{
  const sound = new Howl({
    src: ["../thunder.mp3"]
  });
  sound.play();

})
