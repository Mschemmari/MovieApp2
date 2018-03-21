import React from 'react';

const Header = ({ children })=>(
  <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
              <a class="navbar-brand" href="#">React Movie DB APP</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarsExample07">
                  {children}
                  <form class="form-inline my-2 my-md-0" action="busqueda-peliculas-grid.html">
                      <input class="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search"/>
                  </form>
              </div>
          </div>
      </nav>
  </header>
)

export default Header;
