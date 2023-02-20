import { SkipPrevious } from "@mui/icons-material";
import React from "react";
import { Tutorial,Previous } from "./Appone";

const CompC =() =>{
    return(
<>
  <Tutorial.Consumer>
  {(tname) =>{  
    return (<>
    <Previous.Consumer> 
    {(past) =>{

        return (
            <> 
            <h1>Hello World.</h1>
            <h3>1. We previous study the {past}.</h3>
            </>);
    }}
    </Previous.Consumer>
    
    <h2>2. {tname}React.js tutorial is very interesting.</h2>
    </>);
}}
  </Tutorial.Consumer>
</>
    );
};

export default CompC;