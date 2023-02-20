import React, { useState } from "react";
import Pic from "./Pic.jsx";

const Div = () =>{

   const [fullName,ddatas] = useState( {
    naam : "",
    password :"",
    eMail : "",
    feedback : "",
   } );
   

    const inputValue = (event) =>{
      console.log(event.target.value);
      console.log(event.target.name);
       
      const value = event.target.value;
      const name = event.target.name;

      ddatas( (preValue) => {


       /* return {
          ...preValue,
          [name] : value,
        }; */


        if(name == 'naam') 
        return{
          naam : value,
          password : preValue.password,
          eMail :  preValue.eMail,
          feedback : preValue.feedback,
        };
        else if(name == 'password')
        return{
            naam : preValue.naam,
            password : value,
            eMail :  preValue.eMail,
          feedback : preValue.feedback,
        };
        else if(name == 'eMail')
        return{
          naam : preValue.naam,
          password : preValue.password,
          eMail : value,
          feedback : preValue.feedback,
        };
        else if(name == 'feedback')
        return{
           naam : preValue.naam,
           password : preValue.password,
           eMail : preValue.eMail,
           feedback : value, 
        };
      }); 

      
    };

    const fullNaam =(event) =>{
     event.preventDefault();
    };


 return (
   <>  
   <form onSubmit={fullNaam}> 
   <h1>Hello {fullName.naam} {fullName.password} <br /> {fullName.eMail}
   <br /> {fullName.feedback} </h1>
   <input type= "text" placeholder="Enter The Name" onChange={inputValue}  name="naam" value={fullName.naam} />
   <br />

   <input  type= "text"  placeholder="Enter The Password" onChange={inputValue}   name="password"  value={fullName.password} />

<br />

<input  type= "e_mail"  placeholder="Enter The Email" onChange={inputValue}   name="eMail"  value={fullName.eMail} />

<br />
  <textarea type="text" placeholder="Enter The Feedback"  onChange={inputValue} name ="feedback" value ={fullName.feedback}  rows='5' column ="50" />

   <br />
 
   <Pic />  
   <br />
   
   {/* <img src = {lastName} /> */}
   <br />
   <button type="submit" >Submit</button>
   </form>
   </>
 );
};

export default Div;