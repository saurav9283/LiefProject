import React from 'react';
import {  Link, useNavigate } from "react-router-dom";
import d1 from '../image/d1.png';
import d2 from '../image/d2.png';
import d3 from '../image/d3.png';
import d4 from '../image/d4.png';
import "./Bottombar.css";
const Bottombar = () =>{
  const navigate=useNavigate();

  
  return (
  <div className="all">
    <tr>
      <td className='d1'  onClick={()=>navigate('/')}><img src={d1} alt="Loading..." /></td>
      <td onClick={()=>navigate('/todo')} className='d2'><img src={d2} alt="Loading..." /></td>
      <td className='d3'><img src={d3} alt="Loading..." /></td>
      <td onClick={()=>navigate('/setting')} className='d4'><img src={d4} alt="Loading..." /></td>
    </tr>
  </div>
  );
}
export default Bottombar;