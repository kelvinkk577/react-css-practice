import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';

function Navbar({ links }) {
  const linksComponents = links.map(({ id, name, url }) => {
    return (
      <li key={id}>
        <a href={url}>{name}</a>
      </li>
    )
  })
  return (
    <header>
      <nav>
        <div className="nav-header">
          <img className="logo" src="https://www.webershandwick.com/wp-content/uploads/2019/04/header-logo-lockup-white.png" alt="logo" />
          <div className="links-container">
            <ul className="links">
              {linksComponents}
            </ul>
          </div>
          <button className="menu-icon"><FaBars /></button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar