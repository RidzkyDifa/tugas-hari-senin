import { useNavigate } from "react-router-dom";
import Logos from "../../Asset/logo-chill.png";
import Google from "../../Asset/google.png";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="head-login">
        <img src={Logos} alt="chill" />
        <h2>Daftar</h2>
        <p className="greet">Selamat datang!</p>
      </div>
      <label className="input-title"> Username</label>
      <input
        className="input-area"
        type="text"
        placeholder="Masukan username"
      />
      <label className="input-title">Kata Sandi</label>
      <input
        className="input-area"
        type="text"
        placeholder="Masukan Kata sandi"
      />
      <label className="input-title">Konfirmasi Kata Sandi</label>
      <input
        className="input-area"
        type="text"
        placeholder="Masukan Kata sandi"
      />
      <div className="other-option">
        <p>
          Sudah punya akun?
          <span
            onClick={() => navigate("/login")}
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            {" "}
            Masuk
          </span>
        </p>
      </div>
      <button className="login">Daftar</button>
      <p className="or">Atau</p>
      <button className="log-google btn-regis">
        <img src={Google} alt="google" />
        Daftar dengan Google
      </button>
    </>
  );
};

export default Register;
