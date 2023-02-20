import React, { useState , useEffect } from "react";
import axios from 'axios';
import CompB from "./CompB";

const CompA =() =>{

    const [num , setNum] = useState();
    const [name ,setName] = useState();
    const [base , setBase] = useState();


    useEffect( () => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name);
            setBase(res.data.moves.length);
        }
        getData();
    });

    return(
<>
    {/* <h1>Hello World.</h1>
    <h2>React.js tutorial is very interesting.</h2> */}
    {/* <CompB /> */}



<h1>You Choose {num}</h1>
<h1>My Name  is {name}</h1>
<h1>I Have {base} </h1>

<select value={num} onChange={ (event) =>
 {
    setNum(event.target.value); 
 }}>
    <option  value={1}>1</option>
    <option  value={2}>2</option>
    <option  value={3}>3</option>
    <option  value={4}>4</option>
    <option  value={5}>5</option>
</select>




</>
    );
}

export default CompA;