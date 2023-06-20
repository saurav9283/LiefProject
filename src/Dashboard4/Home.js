import React from 'react'
import Popup1 from './popup/Popup1'
import Popup2 from './popup/Popup2'
import Popup3 from './popup/Popup3'
import './Home.css';
function Home() {
  
  return (
    <div className='container'>
      <div className='editInD1'>
        <h4>Edit Your Settings</h4>
        <hr></hr>
        {/* <div className='targetButton'> */}
            <span></span><h3>Pomodoro</h3><Popup1/><span/>
        {/* </div> */}
        <hr></hr>
        <span></span><h3>Sort Break</h3><Popup2/><span/>
        <hr></hr>
        <span></span><h3>Long Break</h3><Popup3/><span/>
        <hr></hr>
      </div>
    </div>
  )
}

export default Home



