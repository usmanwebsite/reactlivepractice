import React, { useContext } from "react";
import CompC from "./CompC";
import { Tutorial,Previous,Css } from "./Appone";

const CompB =() =>{
    const css = useContext(Css);
    return(
<>
    {/* <h1>Hello World.</h1>
    <h2>React.js tutorial is very interesting.</h2> */}
    <h2>My Aim to be a {css} InshAllah.</h2>
    <CompC />
</>
    );
}

export default CompB;