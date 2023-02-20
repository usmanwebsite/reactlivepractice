import  react from 'react';
import { NavLink } from 'react-router-dom';

const Error = () =>{
return (
<>
<h2>Sorry! Page Not Found.</h2>
<NavLink to="/" > <button>Go Back</button></NavLink>
</>
);
};

export default Error;