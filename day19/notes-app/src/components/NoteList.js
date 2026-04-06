//import {render,screen} from "@testing-library/React;"
import NoteItem from "./NoteItem";
//import "@testing-library/jest-dom";
function NoteList({notes,deleteNote}){
return(
    <ul>{
        notes.map((note)=>(
            <NoteItem key={note.id} note={note} deleteNote={deleteNote}/>
        ))}
        </ul>
);
}
export default NoteList;