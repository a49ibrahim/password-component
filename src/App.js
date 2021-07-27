import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEye, 
  faTimes, 
  faCheck,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons'


export default function App() {
  const [show, setShow] = useState(false);
  const checkConsecuitve = (s) => {
    let l = s.length;
    for(let i = 1; i<l; i++){
      if(s[i] === s[i-1]){
        return true;
      }
    }
    return false;
  }
  //if valid
  const  valid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = "1";

    let valid_icon = document.querySelector(`#${item} .${v_icon}`);
    valid_icon.style.opacity = "1";

    let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
    invalid_icon.style.opacity = "0";
  };

  //if invalid
  const invalid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = ".5";

    let valid_icon = document.querySelector(`#${item} .${v_icon}`);
    valid_icon.style.opacity = "0";

    let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
    invalid_icon.style.opacity = "1";
  }

  //handle input
  const handleInputChange = e => {
    const password = e.target.value;
    if(password.match(/[A-Z]/) != null ){
      valid("capital", "fa-check", "fa-times");
    }else{
      invalid("capital", "fa-check", "fa-times");
    }
    if(password.match(/[0-9]/) != null){
      valid("num", "fa-check", "fa-times");
    }else{
      invalid("num", "fa-check", "fa-times");
    }
    if(password.match(/[!@#$%^&*]/) != null){
      valid("char", "fa-check", "fa-times");
    }else{
      invalid("char", "fa-check", "fa-times");
    }
    if(password.length > 7){
      valid("more8", "fa-check", "fa-times");
    }else{
      invalid("more8", "fa-check", "fa-times");
    }
    if(checkConsecuitve(password)){
      valid("consec", "fa-check", "fa-times");
    }else{
      invalid("consec", "fa-check", "fa-times");
    }
  }
  const handleShowhide = () => {
    setShow(!show);
  }
  return (
    <div className="App">
      <div className="container">
        <input
          type={show ? "text" : "password" }
          className="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
        {
          show ? (
            <FontAwesomeIcon
              onClick={handleShowhide} 
              icon={faEye} 
              id="show_hide" 
            />
          ) : (
            <FontAwesomeIcon
              onClick={handleShowhide} 
              icon={faEyeSlash} 
              id="show_hide" 
            />
          )
        }
        <p id="capital">
          <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
          <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
          <span>Has an uppercase letter</span>
        </p>
        <p id="char">
          <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
          <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
          <span>Has special characters: !@#$%^&*</span>
        </p>
        <p id="num">
          <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
          <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
          <span>Has a number / digit</span>
        </p>
        <p id="more8">
          <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
          <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
          <span>8 or more characters</span>
        </p>
        <p id="consec">
          <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
          <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
          <span>No consecutive characters</span>
        </p>
      </div>
    </div>
  );
}
