import "./error.css";
import Logo from "../../components/logo";
export default function Error() {
  return (
    <div className="error">
        <Logo />
      <h1>Pagina não encontrada</h1>
      <p> Está pagina que você está procurando não existe!</p>
      <a href="http://localhost:3000/"> Voltar para Home</a>
    </div>
  );
}
