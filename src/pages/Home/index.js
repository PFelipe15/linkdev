import "./home.css";
import { Icon } from "../../components/Icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Home() {
  return (
    <div className="home-container">
      <h1>Paulo Felipe</h1>
      <span>Veja seus links 👇 </span>
      <main className="links">
        <section className="link-area">
          <a href="#all">
            <p className="link-text"> Canal no Youtube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#all">
            <p className="link-text"> Link Grupo Whatssap</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#all">
            <p className="link-text"> Link Grupo Telegram</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#all">
            <p className="link-text"> Canal Youtube</p>
          </a>
        </section>
        <footer>
          <Icon url="https://facebook.com/paulo.felipe">
            <FaFacebook size={35} color="#FFF" />
          </Icon>

          <Icon url="https://Youtube/PauloFelipe">
            <FaYoutube size={35} color="#FFF" />
          </Icon>

          <Icon url="https://instagram.com/paullofelipe_/">
            <FaInstagram size={35} color="#FFF" />
          </Icon>
        </footer>
      </main>
    </div>
  );
}
