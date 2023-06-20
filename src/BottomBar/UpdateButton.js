import React, { useState } from 'react'

function UpdateButton() {

    const [modal , setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal);
      };
    
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Update
      </button>
    </div>
  )
}

export default UpdateButton
