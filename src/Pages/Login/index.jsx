import { useNavigate } from "react-router-dom";
import Logos from "../../Asset/logo-chill.png";
import Google from "../../Asset/google.png";
const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="head-login">
        <img src={Logos} alt="logo" />
        <h2>Masuk</h2>
        <p className="greet">Selamat datang kembali!</p>
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
      <div className="other-option">
        <p>
          Belum punya akun?
          <span onClick={() => navigate("./register")} className="regis-btn">
            Daftar
          </span>
        </p>
        <p style={{ fontWeight: "bold", cursor: "pointer" }}>
          Lupa kata sandi?
        </p>
      </div>
      <button
        className="login"
        onClick={() => navigate("/home")}
        style={{ cursor: "pointer" }}
      >
        Masuk
      </button>
      <p className="or">Atau</p>
      <button className="log-google">
        <img src={Google} alt="google" />
        Masuk dengan Google
      </button>
    </>
  );
};

export default Login;
