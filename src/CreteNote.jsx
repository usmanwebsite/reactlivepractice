import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const CreteNote =(props) =>{

    const [note,setNote] = useState({
        title : "",
        content : "",
    });

    const InputValue =(event) =>{
        const {name, value} = event.target;
        setNote ((preData) => {
            return {
                ...preData,
                [name]: value,
            };
        });
    };

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title :"",
            content :"",
        });

    };

   return(
     <>
        <form>
            <input type="text" value={note.title} onChange={InputValue} placeholder ="Enter your Title" name="title"  />
            <textarea  rows="5" value={note.content} onChange={InputValue}  name="content" column="6" placeholder="Enter your Reminder" />
            <button className="btn btn-success" onClick={addEvent}>
                <AddIcon className="plus" />
            </button>

        </form>
     </>
   );
};

export default CreteNote;