export function NavBar({ getUsers }) {
  return (
    <div className="navbar">
      <span className="logo">Assignment</span>
      <button onClick={getUsers}>GetUsers</button>
    </div>
  );
}
