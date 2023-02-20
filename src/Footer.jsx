import React from "react";

const Footer =() =>{
    const year = new Date().getFullYear();
    return (
        <>
    <h3 className="margin">CopyRight © {year}.</h3>
    </>
    );
};
export default Footer;