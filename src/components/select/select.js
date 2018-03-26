import React from 'react';

const Select = ({children, inputValue, handleChange, defaultLabel})=>(
  <select onChange={handleChange} value={inputValue} className="form-control">
    {children}
  </select>
)


export default Select
