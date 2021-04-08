import React from 'react';

function RegistrationPopup(props) {
  return (
    <div className={`popup popup_type_registration ${props.isOpen ? 'popup_opened' : ''}`}  >
      <div className="popup__container" >
        <button aria-label="close button" className="popup__close-button" type="reset" onClick={props.onClose} />
        <h2 className="popup__title">{props.title}</h2>
        <p className="form__link" onClick={props.onFormLinkClick} >Sign In</p>
      </div>
    </div>
  );
}

export default RegistrationPopup;