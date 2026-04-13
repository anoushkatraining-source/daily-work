import { useState } from "react";
function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    status: "open",
    time: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) return;
    addNote(note);
    setNote({
      title: "",
      status: "open",
      time: ""
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter note"
        value={note.title}
        onChange={(e) =>
          setNote({ ...note, title: e.target.value })
        }
      />
      <input
        type="time"
        value={note.time}
        onChange={(e) =>
          setNote({ ...note, time: e.target.value })
        }
      />
      <label>
        <input
          type="checkbox"
          checked={note.status === "closed"}
          onChange={(e) =>
            setNote({
              ...note,
              status: e.target.checked ? "closed" : "open"
            })}
        />
        Status
      </label>
      <button>Add</button>
    </form>
  );
}
export default NoteForm;