import React from 'react'
import {Link} from 'react-router-dom'

const MenuNav = ({})=>(
  <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
          <Link className="nav-link" to='/'> Home </Link>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="peliculas-grid.html">Peliculas</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="series-grid.html">Series</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="mi-lista-grid.html">Mi Lista <span className="badge badge-danger">3</span></a>
      </li>
  </ul>
)

export default MenuNav;
