import React from 'react';

function PopupWithForm(props) {


  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}  >
      <div className="popup__container" >
        <button aria-label="close button" className="popup__close-button" type="reset" onClick={props.onClose} />
        <h2 className="popup__title">{props.title}</h2>
        <form action="#" className="form form_delete" onSubmit={props.onSubmit} name={props.name}>
          {props.children}
          <button aria-label="save button" className="form__save-button form__save-button-delete" type="submit" >{props.buttonText}</button>
          <span className="form__link" onClick={props.onFormLinkClick} >or {props.otherLink}</span>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;