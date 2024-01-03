import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <Link to="home" smooth={true} duration={1000}>Início</Link>
      <Link to="about" smooth={true} duration={1000}>Sobre Mim</Link>
      <Link to="contact" smooth={true} duration={1000}>Contato</Link>
    </nav>
  );
};

export default Navbar;