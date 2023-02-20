 import React, { useState } from "react";
 import Div from "./Div.jsx";




 
 const Array = () => {

   let newDate = new Date().toLocaleTimeString();
  const state=useState();
  //newDate= new Date().toTimeString();
  const [Count, setCount] =useState(newDate);
 
 const IncNumber =() => {
  // Countes ++;       
      newDate= new Date().toLocaleTimeString();
        setCount(newDate);      
    //  console.log("clicked" + Count++);
 };

 setInterval(IncNumber,1)

  return (
    <>

      <h1>{Count}</h1>
      <button onClick={IncNumber}>Get Table</button>
    </>  
  );
 }

 export default Array;