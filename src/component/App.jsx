import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Note from "./Note";
import notes from "./notes.js";

function createNote(noteTerm){
    return(
<Note
key={noteTerm.id}
title={noteTerm.title}
content={noteTerm.content}
/>
);
}

function App (){

    return (
        <div>
    <Heading/>
    {notes.map(createNote)}
    <Footer/>
    </div>
    );
}
export default App;