import {useState} from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
function App(){
  const [notes,setNotes]=useState([]);
  //const addNote=(text)=>{
    //const newNote={id: Date.now(),text};
    const addNote = (note) => {
    const newNote = { ...note };
    newNote.id = Date.now();
    setNotes([...notes,newNote]);
  };
  const sendPostRequest=()=>{
    axios.post("http://localhost:3000/notes",note,{
      headers:{
              "content-Type":"application/json",
      },
    });
  }

  const deleteNote=(id)=>{
    setNotes(notes.filter((note)=>note.id!==id));
  };
  return(
    <div>
      <h1>Notes App</h1>
      <NoteForm addNote={addNote}/>
      <NoteList notes={notes} deleteNote={deleteNote}/> 
    </div>
  );
}
export default App;