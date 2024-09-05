import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6194/6194029.png"
        alt="Taskify Logo"
        className="logo"
      />
      <h1 className="title">Taskify</h1>
    </header>
  );
};

export default Header;
