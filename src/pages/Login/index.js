import "./login.css";
import { auth } from "../../services/firebaseConection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {toast } from 'react-toastify'
import Logo from "../../components/logo";
import Input from "../../components/Input-text";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Preencha todos os campos!");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Seja Bem-Vindo!")
        navigate("/admin", { replace: true });
      })
      .catch(() => {
        toast.error("Erro ao Fazer Login")
      });
  }
  return (
    <div className="login-container">
      <Logo />

      <form className="form" onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="*********"
          autoComplete="on"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        
        <button type="submit"> Acessar</button>
      </form>
    </div>
  );
}
