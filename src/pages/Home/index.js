import "./home.css";
import { useState, useEffect } from "react";
import { Icon } from "../../components/Icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  getDocs,
  collection,
  orderBy,
  query,
  documentId,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../services/firebaseConection";
export default function Home() {
  const [socialLinks, setSocialLinks] = useState({});
  const [links, setLinks] = useState([]);
  useEffect(() => {
    function loadLink() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("createdAt", "asc"));
      getDocs(queryRef)
        .then((snapshot) => {
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
        })
        .catch(() => {});
    }

    loadLink();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");

      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data() !== undefined) {
            setSocialLinks({
              facebook: snapshot.data().facebook,
              instagram: snapshot.data().instagram,
              youtube: snapshot.data().youtube,
            });
          }
        })
        .catch(() => {});
    }
    loadSocialLinks();
  }, []);
  return (
    <div className="home-container">
      <h1>Paulo Felipe</h1>
      <span>Veja seus links 👇 </span>
      <main className="links">
        {links.map((item, index) => (
          <section
            className="link-area"
            style={{ backgroundColor: item.bg }}
            key={item.id}
          >
            <a href={item.url} target="blank">
              <p className="link-text" style={{ color: item.color }}>
                {" "}
                {item.name}
              </p>
            </a>
          </section>
        ))}

        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <Icon url={socialLinks?.facebook}>
              <FaFacebook size={35} color="#FFF" />
            </Icon>

            <Icon url={socialLinks?.youtube}>
              <FaYoutube size={35} color="#FFF" />
            </Icon>

            <Icon url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#FFF" />
            </Icon>
          </footer>
        )}
      </main>
    </div>
  );
}
