import React from 'react';

function PopupFormAddPlace() {
    return (
        <>
            <label className="popup__form-field">
                <input className="popup__input popup__input_text_name-add" id="nameMesto" type="text" minLength="2" maxLength="30" placeholder={"Название"} name="name" required />
                <span className="popup__error" id="nameMesto-error">Вы пропустили это поле.</span>
            </label>
            <label className="popup__form-field">
                <input className="popup__input popup__input_text_link-add" type="url" id="url" placeholder={"Cсылка на картинку"} name="job" required />
                <span className="popup__error" id="url-error">Введите адрес сайта.</span>
            </label>
        </>
    )
}

export default PopupFormAddPlace