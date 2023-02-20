import { Button } from "bootstrap";
import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

// const User = ( {match} ) => {
//  return (
//     <h1> It is a { match.params.fname} {match.params.lname} user page </h1>
//  );
//  };
 const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    return (
      <> 
       <h1> It is a {fname} {lname} user page </h1>
       <h5> My Current location is {location.pathname} .</h5>
       
       { location.pathname === `/user/DJ/Pandoki` || location.pathname === `/user/Rana/kasoti` ?
         (<button onClick={
              () =>{
                alert("Paieya tera teaad theek ae?") 
                history.push("/contact");
                }
             }
             > click on it</button>
         ):
         null
        }

       </>
    );
  };
export default User;