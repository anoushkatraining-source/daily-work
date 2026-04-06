function NoteList({ notes, deleteNote }) {
  if (notes.length === 0) {
    return <p className="empty">No notes available</p>;
  }
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirmDelete) {
      deleteNote(id);
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Time</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note) => (
          <tr key={note.id}>
            <td>{note.title}</td>
            <td>{note.time}</td>
            <td>{note.status}</td>
            <td>
              <button onClick={() => handleDelete(note.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default NoteList;