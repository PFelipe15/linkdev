import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./networks.css";
import Input from "../../components/Input-text";
import { MdAddLink } from "react-icons/md";
import { db } from "../../services/firebaseConection";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// import { Container } from './styles';

export default function NetWorks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");

      getDoc(docRef)
        .then((snapshot) => {
          if(snapshot.data()!== undefined){
            setFacebook(snapshot.data().facebook)
            setInstagram(snapshot.data().instagram)
            setYoutube(snapshot.data().youtube)
          }
        })
        .catch((err) => {
          console.log("Erro ao salvar" + err);
        });
    }

    loadLinks();
  }, []);
  function handleSave(e) {
    e.preventDefault();
    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        toast.success("Salvo com sucesso!");
      })
      .catch((err) => {
        console.log("ERRO AO SALVAR" + err);
        toast.error("Erro ao salvar");
      });
  }

  return (
    <div className="admin-container">
      <Header />
      <h1 className="title-social">Suas Redes Sociais</h1>
      <form className="form" onSubmit={handleSave}>
        <label className="label"> Link do Facebook</label>
        <Input
          placeholder="Digite o link do seu Facebook..."
          value={facebook}
          onChange={(e) => {
            setFacebook(e.target.value);
          }}
        ></Input>

        <label className="label"> Link do Instagram</label>
        <Input
          placeholder="Digite o link do seu Instagram..."
          value={instagram}
          onChange={(e) => {
            setInstagram(e.target.value);
          }}
        ></Input>

        <label className="label"> Link do Youtube</label>
        <Input
          placeholder="Digite o link do Youtube... "
          value={youtube}
          onChange={(e) => {
            setYoutube(e.target.value);
          }}
        ></Input>

        <button className="btn-register" type="submit">
          Salvar Links <MdAddLink size={24} color="#FFF" />
        </button>
      </form>
    </div>
  );
}
