import { useState } from "react";
function NoteForm({addNote}){
    const[note,setNote]=useState({
    title:"my note",
    status: "created"
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
       // if(!text.trim()) return;
       // addNote(text);
        //setText("");
        addNote(note);
        setNote({
            title:"",
            status:""
        });
    };
    return(
        <form onSubmit={handleSubmit}>
            <input 
            placeholder="Enter note"
           // value={text}
           // onChange={(e)=>setText(e.target.value)}
            value={note.title}
            onChange={(e) => setNote({...note,title:e.target.value})}
         />
        <input value={note.status} 
        onChange={(e)=>setNote({...note,status:e.target.value})}/>
        <button>Add</button>
        </form>
    );
}
export default NoteForm;
