import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import axios from "axios";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3001/notes");
      setNotes(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const addNote = async (note) => {
    try {
      const res = await axios.post("http://localhost:3001/notes", note);
      setNotes((prev) => [...prev, res.data]);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteNote = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3001/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const toggleComplete = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, completed: !note.completed }
          : note
      )
    );
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<NoteForm addNote={addNote} />} />
        <Route path="/add" element={<NoteForm addNote={addNote} />} />
        <Route
          path="/list"
          element={
            <NoteList
              notes={notes}
              deleteNote={deleteNote}
              toggleComplete={toggleComplete}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;