import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import axios from "axios";
function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      content: note.content
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    sendPostRequest(newNote);
  };
  const sendPostRequest = async (newNote) => {
    try {
      await axios.post("http://localhost:3001/notes", newNote);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  };
  return (
    <div>
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}
export default App;