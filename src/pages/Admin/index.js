import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { db } from "../../services/firebaseConection";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
import "./admin.css";
import Input from "../../components/Input-text";
import Logo from "../../components/logo";
import { toast } from "react-toastify";
import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
export default function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setbackgroundColorInput] = useState("#f1f1f1");
  const [textColorInput, settextColorInput] = useState("#121212");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const linksRef = collection(db, "links");
    const queryRef = query(linksRef, orderBy("createdAt", "asc"));
    onSnapshot(queryRef, (snapshot) => {
      let lista = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color,
        });
      });
      setLinks(lista);
    });
  }, []);

  async function handleRegister(e) {
    e.preventDefault();
    if (nameInput === "" || urlInput === "") {
      toast.warn("Preencha todos os campos");
      return;
    }
    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      createdAt: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
        toast.success("Link registrado");
      })
      .catch((err) => {
        console.log("Erro ao Registrar" + err);
        toast.error("Ops, houve um erro!");
      });
  }

  async function handleDeleteLink(id, name) {
    const docRef = doc(db, "links", id);
    await deleteDoc(docRef);
    return toast.success(`${name} Detelado com sucesso!`);
  }
  return (
    <div className="admin-container">
      <Header />
      <Logo />

      <form className="form" onSubmit={handleRegister}>
        <label className="label"> Nome do Link </label>
        <Input
          placeholder="Nome do Link..."
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
        />

        <label className="label"> Url do link </label>
        <Input
          placeholder="Digite a Url..."
          type="url"
          value={urlInput}
          onChange={(e) => {
            setUrlInput(e.target.value);
          }}
        />

        <section className="container-colors">
          <div>
            <label className="label rigth"> Fundo do Link</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => {
                setbackgroundColorInput(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="label rigth"> Cor do Link</label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => {
                settextColorInput(e.target.value);
              }}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="preview">
            <label className="label">Veja como esta ficando👇</label>
            <article
              className="list"
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: backgroundColorInput,
              }}
            >
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </div>
        )}

        <button className="btn-register" type="submit">
          Cadastrar <MdAddLink size={24} color="white" />
        </button>
      </form>

      <h2 className="title">Meus links </h2>

      {links.map((item, index) => (
        <article
          key={index}
          className="list animate-pop"
          style={{ backgroundColor: item.bg, color: item.color }}
        >
          <p>{item.name}</p>
          <div>
            <button
              className="btn-delete"
              onClick={() => handleDeleteLink(item.id, item.name)}
            >
              <FiTrash2 size={18} color="white" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
