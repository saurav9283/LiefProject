import React from 'react'
import './Home.css';
import right from '../image/right.png'
function Home() {
  return (
    <div className='container'>
      <div className='editInD1'>
        <h4>Edit Your Settings</h4>
        <hr></hr>
        <h3>Pomodoro <img style={{width:"20px" , marginLeft:"120px"}} src={right} alt="Loading..." /></h3>
        <hr></hr>
        <h3>Sort Break <img style={{width:"20px" , marginLeft:"120px"}} src={right} alt="Loading..." /></h3>
        <hr></hr>
        <h3>Long Break <img style={{width:"20px" , marginLeft:"120px"}} src={right} alt="Loading..." /></h3>
        <hr></hr>
      </div>
    </div>
  )
}

export default Home
