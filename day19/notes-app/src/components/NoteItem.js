function NoteItem({ note, deleteNote }) {
  return(
    <li>
      {note.title}, {note.status}, {note.time}
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </li>
  );}
export default NoteItem;