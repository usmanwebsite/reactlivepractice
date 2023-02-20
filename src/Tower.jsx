import React from "react";
import Card  from "./Card";
import Sdata from "./Sdata";

const Tower =() =>{
    return(
        <Card
        key={Sdata[1].id}
     imgsrc={Sdata[1].imgsrc}
     name={Sdata[1].name}
     content={Sdata[1].content} 
     link={Sdata[1].link}
      />
      );
}

export default Tower;