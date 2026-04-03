import { useState } from "react";
function NoteForm({ addNote }) {
    const [note, setNote] = useState({
        title: "",
        content: "open"
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!note.title.trim()) return;
        addNote(note);
        setNote({
            title: "",
            content: "open"
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
                        checked={note.content === "closed"}
                        onChange={(event) =>
                            setNote({
                                ...note,
                                content: event.target.checked ? "closed" : "open"
                            })
                        }
                    />
                    content
                </label>
            </div>
            <button>Add</button>
        </form>
    );
}
export default NoteForm;