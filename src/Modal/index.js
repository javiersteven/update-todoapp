import React, { useState } from "react";
import './Modal.css'

const Modal = ({ state, setState, setSubmiting, submiting }) => {
  const [mail, setMail] = useState("");
  const [psswd, setPsswd] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      alert(`Form has been send ${mail} ${psswd}`);
      setSubmiting(!submiting);
      setState((state) => !state);
    }, 1000);
  };
  
  return (
    <>
      {state && (
        <div className="wrapper-modal">
          <div className="modal-styles">
            <h2>Hola mundo!</h2>
            <p>Todo esto es desde un modal!</p>
            <hr/>
            <div>
              <form className="styled-form" onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="email@codesandbox.com"
                  onChange={(e) => setMail(e.target.value)}
                />
                <label>Contraseña</label>
                <input
                  type="password"
                  placeholder="C0ntr4seña123"
                  onChange={(e) => setPsswd(e.target.value)}
                />
                <button type="submit">Enviar datos!</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };
