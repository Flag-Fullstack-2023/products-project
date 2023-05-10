import React from "react";
import { PopupContainer } from "./popup.styles";

const Popup = ({ title, description, type, setPopupProperties }) => {
  console.log("ola, eu sou o popup");

  if (!title || !description || !type) {
    return null;
  }

  console.log("ola, eu sou o popup com conteudo");

  return (
    <PopupContainer>
      <div className={`popup popup--${type}`}>
        <div className="popup__container">
          <button
            className="popup__close"
            onClick={() => setPopupProperties({})}
          >
            x
          </button>
          <div className="popup__content">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </PopupContainer>
  );
};

export default Popup;
