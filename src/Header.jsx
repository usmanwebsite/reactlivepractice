import React from "react";
import EventIcon from '@mui/icons-material/Event';

const Header =() =>{
    return(
    <>
       <img src= {EventIcon} alt="logo" width="75" height="55" />
       <h1>My Remainder List</h1>
    </>
    );
};

export default Header;