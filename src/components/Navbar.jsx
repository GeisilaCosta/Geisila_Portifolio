import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre Mim</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/contact">Contato</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/languages">Linguagens</Link>
    </nav>
  );
};

export default Navbar;


