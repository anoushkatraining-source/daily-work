function Navbar({ setView }) {
  return (
    <nav className="navbar">
      <button onClick={() => setView("add")}>Add Note</button>
      <button onClick={() => setView("list")}>Note List</button>
    </nav>
  );
}

export default Navbar;