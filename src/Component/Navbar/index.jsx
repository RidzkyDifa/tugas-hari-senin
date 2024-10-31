import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Asset/logo-chill.jpg";
import MiniLogo from "../../Asset/clip-logo.jpg";
import Avatar from "../../Asset/account-logo.jpg";
import "./style.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="left-side">
          <img src={Logo} alt="Logo" className="logo" />
          <img src={MiniLogo} alt="mini-logo" className="mini-logo" />
          <ul className="list">
            <li className="list-navbar">
              <a href="">Series</a>
            </li>
            <li className="list-navbar">
              <a href="">Film</a>
            </li>
            <li className="list-navbar">
              <a href="">Daftar Saya</a>
            </li>
          </ul>
        </div>
        <div className="avatar">
          <img
            src={Avatar}
            alt="avatar"
            className="avatar"
            onClick={toggleDropDown}
          />
          {isOpen && (
            <div className="dropdown-content">
              <span>Profil Saya</span>
              <span>Upgrade Ke Premium</span>
              <span onClick={() => navigate("/login")}>Keluar</span>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
