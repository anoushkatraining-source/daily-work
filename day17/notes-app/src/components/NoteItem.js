function NoteItem({note,deleteNote}){
    return(
        <li>
            {note.title},{note.content}
            <button onClick={()=>deleteNote(note.id)}>Delete</button>
            {/* {note.text} */}
        </li>
    );
}
export default NoteItem;