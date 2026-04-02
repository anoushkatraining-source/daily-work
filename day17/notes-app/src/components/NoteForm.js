import { useState } from "react";
function NoteForm({ addNote }) {
    const [note, setNote] = useState({
        title: "",
        status: "open"
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!note.title.trim()) return;
        addNote(note);
        setNote({
            title: "",
            status: "open"
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Enter note"
                value={note.title}
                onChange={(e) =>
                    setNote({ ...note, title: e.target.value })
                }
            />
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={note.status === "closed"}
                        onChange={(event) =>
                            setNote({
                                ...note,
                                status: event.target.checked ? "closed" : "open"
                            })
                        }
                    />
                    Status
                </label>
            </div>
            <button>Add</button>
        </form>
    );
}
export default NoteForm;