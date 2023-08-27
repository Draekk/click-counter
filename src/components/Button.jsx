import React from 'react';
import '../stylesheets/Button.css'

function Button({ text, isClickBtn, clickHandler }) {
  return (
    <button
      className={ isClickBtn ? 'click-button' : 'reset-button' }
      onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Button;