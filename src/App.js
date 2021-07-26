import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons'


export default function App() {
  const handleInputChange = e => {
    console.log(e.target.value)
  }
  const showHide = () => {
    //
  }
  return (
    <div className="App">
      <div className="contaner">
        <input
          type="password"
          className="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
        <FontAwesomeIcon icon={faEye} id="show_hide" onClick={showHide}/>
        <p id="capital"></p>
      </div>
    </div>
  );
}
