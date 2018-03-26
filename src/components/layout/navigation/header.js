import React from 'react';

const Header = ({ children })=>(
  <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <a className="navbar-brand" href="#">React Movie DB APP</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample07">
                  {children}
                  <form className="form-inline my-2 my-md-0" action="busqueda-peliculas-grid.html">
                      <input className="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search"/>
                  </form>
              </div>
          </div>
      </nav>
  </header>
)

export default Header;
