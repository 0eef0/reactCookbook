import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({setPath}) => {
  return (
    <nav id="navbar">
      <div>
        <h1>Roldan's Eats</h1>
      </div>
      <ul>
        <li><Link onClick={() => setPath('Home')} to='/'>Home</Link></li>
        <li><Link onClick={() => setPath('Blog')} to='/blog'>Blog</Link></li>
        <li><Link onClick={() => setPath('Recipes')} to='/recipes'>Recipes</Link></li>
        <li><Link onClick={() => setPath('Contact')} to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar