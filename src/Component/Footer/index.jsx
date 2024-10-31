import ListGrid from "../List";
import HelpOption from "../Help";
import Logo from "../../Asset/logo-chill.png";
import "./style.css";
const Footer = () => {
  return (
    <>
      <hr></hr>
      <footer className="footer">
        <div className="left-foot">
          <img src={Logo} alt="Logo" />
          <p>@2023 Chill All Right Reserved.</p>
        </div>
        <div className="mid-foot">
          <h4>Genre</h4>
          <ListGrid />
        </div>
        <div className="right-foot">
          <h4>Bantuan</h4>
          <HelpOption />
        </div>
      </footer>
    </>
  );
};

export default Footer;
