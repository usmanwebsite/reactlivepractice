import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const AddNotes =(props) =>{

    const deleteItem =() =>{
        props.deleteItem(props.id);
    };

    return(
        <>
            <h1>{props.title}</h1>
            <br />
            <strong> {props.content} </strong>
            <button className="btn btn-danger" onClick={deleteItem}> 
            <DeleteIcon className="Delete" />
            </button>
        </>
    );
};
export default AddNotes;