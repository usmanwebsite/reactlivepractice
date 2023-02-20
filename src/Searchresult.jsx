import React from "react";

const Searchresult = (props) => {
    const img =`https://source.unsplash.com/user/erondu/400x300/?${props.name}`;
return(
<div>
    <img src={img}  alt="Search" /> 
</div>
);
};

export default Searchresult;