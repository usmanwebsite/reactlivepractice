import React from "react";
import { createContext } from "react";
import CompA from "./CompA";


const Tutorial = createContext();
const Previous = createContext();
const Css = createContext();
const Appone =() =>{
return(
    <>
     <Tutorial.Provider  value={"Laravel8.php"}>
     <Previous.Provider  value={"php & Bootstrap"}>
     <Css.Provider value={"Assitant Commisner"}> 
      <CompA />
      </Css.Provider>
      </Previous.Provider>
     </Tutorial.Provider>
      
    </>
);
};
export default Appone; 
export {Tutorial,Previous,Css};