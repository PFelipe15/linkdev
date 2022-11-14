import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "../logo/logo.css";
export default function Logo() {
  return (
    <Link to={"/"}>
      <img src={logo} alt="Logomarca" className="logo"></img>
    </Link>
  );
}
