import React, { useState,useContext} from "react";
import { SettingsContext } from '../../Dashboard1/context/SettingContext'
import "./Popup1.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const [newTimer, setNewTimer] = useState({
    work: 25,
    short: 5.0,
    long: 10.0,
    active: 'work'
})

const {updateExecute} = useContext(SettingsContext)
const [updateValue1 , setUpdateValue1] = useState('')

const handleChange = input => {
    const {name, value} = input.target
    switch (name) {
        case 'work':
            setNewTimer({
                ...newTimer,
                work: parseInt(value)

            });
            setUpdateValue1(value)
            break;
        case 'shortBreak':
            setNewTimer({
                ...newTimer,
                short: parseInt(value)
            });
            break;
        case 'longBreak':
            setNewTimer({
                ...newTimer,
                long: parseInt(value)
            });
            break;
        default:
            break;
    }
    
}
const handleSubmit = e => {
    e.preventDefault()
    updateExecute(newTimer)
}
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <span className="valueUpdate">{updateValue1}</span>
      <button onClick={toggleModal} className="btn-modal">
        Update
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          {/* <div className="form-container"> */}
            <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input className="input" type="number" name="work" onChange={handleChange} value={newTimer.work} />
                    <input className="input" type="number" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                    <input className="input" type="number" name="longBreak" onChange={handleChange} value={newTimer.long} />
                </div>
                <button type='submit'>Set Timer</button>
            </form>
        {/* </div> */}
            
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}