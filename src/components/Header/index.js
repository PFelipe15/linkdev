import "./header.css";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom"
import {auth} from '../../services/firebaseConection'
import {signOut} from 'firebase/auth'
export default function Header() {
    async function handleLogout(){
        await signOut(auth)
    }
  return (
    <header className="admin-header">
      <nav className="nav-header">
        <button onClick={handleLogout}>
          <BiLogOut size={28} color="red" />
        </button>
        <Link to="/admin"> Links</Link>
        <Link to="/admin/social">Redes Socias</Link>
      </nav>
    </header>
  );
}
