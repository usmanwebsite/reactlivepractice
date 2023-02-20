import React  from 'react';
import ReactDOM from 'react-dom';
// import Notes from './Notes.jsx';
import "./index.css";
// import Bootstrap from './Bootstrap.jsx';
import Appone from './Appone.jsx';
// import CompA from './CompA';
import Heading from './Heading.jsx';
import { BrowserRouter } from "react-router-dom";

 
 /* const Fav=() =>{
  if(favs== "Phool"){
 
    return <Phool />;
  }
  else{

    return <Tower />;

  }
 } 
 const bama = "bamaModaabad";
 const array1 = ['asdf' ,'qwerty' , 'poiuy'];
 const array2 = [1, ...array1, 'Jataka', ...bama];
 
   console.log(array1);
   console.log(array2);

/* Separate Operator (...(Name of object) )
 const dataName = {
  namess : 'Rana Suleman',
  property : 'Wada Tappo'
};

const bioName ={
   id : 1,
   ...dataName,
   chaair : 'chakki',
   gender : 'male'
};
 console.log(dataName);
 console.log(bioName);
*/


 ReactDOM.render(
<>

 {/*<Favs />*/}
 {/*(favs == "Tower")? <Phool /> : <Tower />*/}


 {/*<Div />*/}

 {/*<Bootstrap />*/}  
 {/* <Notes /> */}
  {/* <Appone />  */}
  {/* <CompA />  */}
  <BrowserRouter>  
    <Heading />
  </BrowserRouter>

</>,
  document.getElementById("root")
);