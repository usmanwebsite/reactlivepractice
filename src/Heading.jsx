import React from 'react';
import Contact from './Contact';
import About from './About';
import Error from './Error';
import { Route,Switch , Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Service from './Service';
import User from './User';
import Search from './Search';
// import { useEffect } from 'react';
// import { Switch } from 'react-router-dom';


const Heading =() =>{

    const Name =()=>{
        return <h2>I am Name Page </h2>
    }
     const Age =() =>{
       return <h4>Age is 23 year old</h4>
   }

    return (
    <>  
      <h1>This is my first heading</h1>
      
      

      <Navbar />
      <Switch>
        <Route exact path='/' component={ () => <About name ='About' /> } />
        <Route exact path='/contact' component={ () => <Contact name ='Contact' /> } />
        <Route exact path='/search' component={Search} />
        <Route exact path='/contact/name' render ={ () => <Service name='Service' /> } />
        <Route path='/contact/name/age' component ={Age} />
        <Route path='/user/:fname/:lname' component ={User} />
        <Redirect to="/" />
        {/* <Route  component ={Error} /> */}
      </Switch>

      {/* <About />
      <Contact /> */}
    </>
    );
};

export default Heading;
//export {Route ,Switch};