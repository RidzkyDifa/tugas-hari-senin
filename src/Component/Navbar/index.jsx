import Logo from "../../Asset/logo-chill.jpg";
import Avatar from "../../Asset/account-logo.jpg";
import "./style.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left-side">
          <img src={Logo} alt="Logo" className="logo" />
          <ul>
            <li>
              <a href="">Series</a>
            </li>
            <li>
              <a href="">Film</a>
            </li>
            <li>
              <a href="">Daftar Saya</a>
            </li>
          </ul>
        </div>
        <div className="avatar">
          <img src={Avatar} alt="avatar" className="avatar" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
