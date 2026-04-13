import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} 
from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function NoteList({ notes, deleteNote, toggleComplete }) {
  const [sortType, setSortType] = useState("");
  const [searchText, setSearchText] = useState("");
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const getPriorityValue = (priority) => {
    if (priority === "High") return 3;
    if (priority === "Medium") return 2;
    return 1;
  };
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (sortType === "name") {
      return a.title.localeCompare(b.title);
    }
    if (sortType === "priority") {
      return getPriorityValue(b.priority) - getPriorityValue(a.priority);
    }
    return 0;
  });
  if (!notes.length) {
    return <p className="empty">No tasks added yet</p>;
  }
  return (
    <div>
      <div className="controls">
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="priority">Priority</option>
        </select>
        <input
          type="text"
          placeholder="Search task..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Start</th>
            <th>End</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedNotes.map((note) => (
            <tr
              key={note.id}
              className={note.completed ? "completed" : ""}>
              <td>{note.title}</td>
              <td>{note.content}</td>
              <td>{formatDate(note.startDate)}</td>
              <td>{formatDate(note.endDate)}</td>
              <td>{note.priority}</td>
              <td>
                <button onClick={() => toggleComplete(note.id)}>
                  ✔
                </button>
                <button onClick={() => deleteNote(note.id)}>
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default NoteList;