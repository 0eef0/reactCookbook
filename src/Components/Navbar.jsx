import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div>
        <h1>Roldan's Eats</h1>
      </div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/test1'>Test1</Link></li>
        <li><Link to='/test2'>Test2</Link></li>
        <li><Link to='/test3'>Test3</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

/*     <div>
        <img src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png" alt="logo">
        <h1>Brand Name</h1>
    </div>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/store">Store</a></li>
    </ul> */