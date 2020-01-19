import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
        className     ="input"
        type          ="text"
        placeholder   ="Escribe un mensaje..."
        value       = { message}
        onChange    = { (event) => setMessage(event.target.value) }
        onKeyPress  = { event => event.key === 'Enter' ? sendMessage(event) : null }  
    />
    <button className="sendButton" onClick={(event) => sendMessage(event)}>Enviar</button>
  </form>
)

export default Input;