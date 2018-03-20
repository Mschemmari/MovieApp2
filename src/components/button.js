import React from 'react';

const Button = ({title, btnType, icon})=>(
  <div className="list-item-actions">
      <a href="peliculas-list.html" className={"btn " + btnType} aria-label="Profile">
          <i className={"mdi "+ icon} aria-hidden="true"></i> {title}
      </a>
  </div>
)

Button.defaultProps ={
  btnType: 'btn-primary',
  icon: 'mdi-heart-outline'
}

export default Button;
