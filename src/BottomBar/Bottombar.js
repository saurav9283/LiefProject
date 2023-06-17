import React from 'react';
import {  Link } from "react-router-dom";
const Bottombar = () =>{
  return (
  <div className='All'>
    <li>
      <Link to="/">Dogs</Link>
    </li>
    <li>
      <Link to="/cats">Cats</Link>
    </li>
    <li>
      <Link to="/sheeps">Sheeps</Link>
    </li>
    <li>
      <Link to="/goats">Goats</Link>
    </li>
  </div>
  );
}
export default Bottombar;