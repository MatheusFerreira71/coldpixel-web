import './Navbar.scss'
import { Brazil } from '../../assets/Brazil.tsx'
import { Instagram } from '../../assets/Instagram.tsx';
import { Linkedin } from '../../assets/Linkedin.tsx';

function Navbar() {

  return (
    <div className="container navbar">
      <div className="logo">
        <a href="/">
          <img src="logo.png" alt="Logotipo" />
        </a>
      </div>
      <div className="nav-menu">
        <a href="/" className="active">Início</a>
        <a href="/">Sobre nós</a>
        <a href="/">Nosso trabalho</a>
        <a href="/">Contato</a>
        <div className="nav-socials">
          <a href="/">
            <Linkedin />
          </a>
          <a href="/">
            <Instagram />
          </a>
        </div>
        <Brazil />
      </div>
    </div>
  )
}

export default Navbar