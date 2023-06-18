import React from 'react'
import { Outlet } from 'react-router-dom'
import Bottombar from './BottomBar/Bottombar'

function App() {
  return (
    <div>
     <Outlet/>
     <Bottombar />
    </div>
  )
}

export default App
