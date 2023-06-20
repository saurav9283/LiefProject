import React from 'react'
import Popup from '../Dashboard4/Popup'
import './Home.css';
function Home() {
  
  return (
    <div className='container'>
      <div className='editInD1'>
        <h4>Edit Your Settings</h4>
        <hr></hr>
        {/* <div className='targetButton'> */}
            <span></span><h3>Pomodoro</h3><Popup/><span/>
        {/* </div> */}
        <hr></hr>
        <span></span><h3>Sort Break</h3><Popup/><span/>
        <hr></hr>
        <span></span><h3>Long Break</h3><Popup/><span/>
        <hr></hr>
      </div>
      <Popup/>
    </div>
  )
}

export default Home



