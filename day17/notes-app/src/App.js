import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import axios from "axios";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  const [view, setView] = useState("add");
  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3001/notes");
      setNotes(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  const addNote = async (note) => {
    const newNote = { ...note, id: Date.now() };
    setNotes((prev) => [...prev, newNote]);
    //setView("list");
    try {
      await axios.post("http://localhost:3001/notes", newNote);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteNote = async (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    try {
      await axios.delete(`http://localhost:3001/notes/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="app">
      <Navbar setView={setView} />
      <h1 className="title">Notes App</h1>
      {view === "add" && <NoteForm addNote={addNote} />}
      {view === "list" && (
        <NoteList notes={notes} deleteNote={deleteNote} />
      )}
    </div>
  );
}
export default App;