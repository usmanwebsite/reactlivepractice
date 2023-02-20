import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from './Footer.jsx';
import CreteNote from "./CreteNote";
import AddNotes from "./AddNotes.jsx";



const Notes = () =>{

    const [nodeItem , setNode] = useState([]);



    const passNode =(note) =>{

        setNode((preValue) =>{
            return [...preValue, note];
        });
    
        alert('Clicked');
        console.log(note);
    };

    const onDelete =(id) => {
        setNode((olddata) =>
        olddata.filter((cData , indx) =>{
            return  indx !==id;
        })
        );
    };

    return(
    <>
    <Header />
    <CreteNote passNote={passNode} />
    <AddNotes />

    {nodeItem.map((val,index)=> {
        return <AddNotes 
        key={index}
        id ={index}
        title= {val.title}
        content= {val.content}
        deleteItem ={onDelete}
        />
    })
    }
    <Footer />
    </>
    );
};

export default Notes;