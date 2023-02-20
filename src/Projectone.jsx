import React, { useState } from "react";
import './index.css';


const Projectone =() =>{

 const [items,setitems] = useState();
 const [itemName,setItemName] = useState([]);

 const itemList = (event) => {
  setitems(event.target.value);
 };

 const listItemName = () => {
    setItemName((olditems) => {
    return [...olditems,items];
    });
    setitems("");
 };

 const deleteItems = (id) => {
   console.log("clicked");
    setItemName((olditems) => {
   return olditems.filter((arrElement,index) => {
     return index !== id;
     
   });
 });
 };


return(
    <>
       <h1 className="heading">TODO List</h1> 
       <input type= "text" placeholder="Add a Items" onChange={itemList} value={items} />
       <button onClick={listItemName}>  + </button>


    
       <ol>
         {itemName.map((itemValue, index) => {
            return (
                <> 
                <i className="fa-solid fa-x" onClick={deleteItems}/>
                <li>{itemValue} key={index} id={index}</li>
                </>
                );
         })}
       </ol> 

    </>
);
}


export default Projectone;