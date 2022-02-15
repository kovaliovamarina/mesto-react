import React from 'react';

function ImagePopup(props) {
    // debugger
    return (
        // <div className="popup popup_type_picture">
        <div className={`popup popup_type_${props.name} ${props.openPopup ? 'popup_opened' : ''} page__container`}>
            <div className="popup__block">
                <button className="popup__close-button" aria-label="Закрыть" type="button" onClick={props.closePopup}></button>
                <div className="popup__view">
                    <img className="popup__img" src={props.openPopup ? props.openPopup.link : '#'} alt={props.openPopup ? props.openPopup.name : ''} />
                    <h2 className="popup__title">{props.openPopup ? props.openPopup.name : ''}</h2>
                </div>
            </div>
        </div>
    )
}

export default ImagePopup;