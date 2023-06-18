import React from 'react';
import {  Link } from "react-router-dom";
import d1 from '../image/d1.png';
import d2 from '../image/d2.png';
import d3 from '../image/d3.png';
import d4 from '../image/d4.png';
import "./Bottombar.css";
const Bottombar = () =>{
  return (
  <div className="all">
    <tr>
      <td className='d1'><img src={d1} alt="Loading..." /></td>
      <td className='d2'><img src={d2} alt="Loading..." /></td>
      <td className='d3'><img src={d3} alt="Loading..." /></td>
      <td className='d4'><img src={d4} alt="Loading..." /></td>
    </tr>
  </div>
  );
}
export default Bottombar;