import { useState } from "react";
function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content:"",
    status: "open",
    time: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) return;
    addNote(note);
    setNote({
      title: "",
      content:"",
      status: "open",
      time: ""
    });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter note"
        value={note.title}
        onChange={(e) =>
          setNote({ ...note, title: e.target.value })
        }
      />
        <input
        type="text"
        placeholder="Enter description"
        value={note.content}
        onChange={(e) =>
          setNote({ ...note, content: e.target.value })
        }
      />

      <input
        type="time"
        value={note.time}
        onChange={(e) =>
          setNote({ ...note, time: e.target.value })
        }
      />
      <label className="checkbox">
        <input
          type="checkbox"
          checked={note.status === "closed"}
          onChange={(e) =>
            setNote({
              ...note,
              status: e.target.checked ? "closed" : "open"
            })
          }
        />
        Status
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
export default NoteForm;