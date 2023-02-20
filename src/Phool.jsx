import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";



const Phool = () =>{

    return(
      <Card
      key={Sdata[0].id}
   imgsrc={Sdata[0].imgsrc}
   name={Sdata[0].name}
   content={Sdata[0].content} 
   link={Sdata[0].link}
    />
    );
    }

    export default Phool;