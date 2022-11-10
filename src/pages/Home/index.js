import "./home.css";
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
      </main>
    </div>
  );
}
