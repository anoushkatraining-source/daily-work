import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Notes App</h2>
      <div className="nav-links">
        <Link to="/add">
          <button>Add Note</button>
        </Link>
        <Link to="/list">
          <button>Note List</button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;