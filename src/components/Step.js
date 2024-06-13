import React from "react";

const Step = (props) => {
  return (
   <><form id={props.step}>
      <h1>{props.title}</h1>
      <input id={props.id1} placeholder={props.placeholder1}></input>
      <br />
      <input id={props.id2} placeholder={props.placeholder2}></input>
      <br></br>
      {props.step !== "step3" && (
        <button type="button" onClick={(e) => props.handleButtonClick(e, "next")}>Next</button>
      )}
      {props.step !== "step1" && (
        <button type="button" onClick={(e) => props.handleButtonClick(e, "previous")}>Previous</button>
      )}
      {props.step === "step3" && (
        <button type="button" onClick={(e) => e.preventDefault()}>Submit</button>
      )}
      
    </form>
    <form id="step1"></form>
    <form id="step2"></form>
    <form id="step3"></form></>
  );
};

export default Step;