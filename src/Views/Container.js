import React from 'react'

const GlobalContainer = ({children}) => (
  <main role="main">
    <div className="py-5 bg-light">
      <div className="container">
        {children}
      </div>
    </div>
  </main>
)

export default GlobalContainer;
