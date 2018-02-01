import React from 'react';
import CartNavbar from './CartNavbar'


const Header = () => {
  return (
    <header>
      <h2></h2>
      <nav>
        <li><a href='/'>home</a></li>
        <li><a href='#products'>products</a></li>
        <li><a href="about">about</a></li>
        <li><a href='#cart'><CartNavbar/></a></li>
      </nav>
    </header>
  )
}

export default Header;

