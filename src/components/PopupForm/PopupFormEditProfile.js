import React from "react";

function PopupFormEditProfile() {
    return (
        <>
            <label className="popup__form-field">
                <input className="popup__input popup__input_text_name" id="nameProfile" type="text" minLength="2" maxLength="40" placeholder={"Введите данные"} name="name" required />
                <span className="popup__error" id="nameProfile-error">Вы пропустили это поле.</span>
            </label>
            <label className="popup__form-field">
                <input className="popup__input popup__input_text_job" id="job" type="text" minLength="2" maxLength="200" placeholder={"Введите данные"} name="job" required />
                <span className="popup__error" id="job-error">Вы пропустили это поле.</span>
            </label>
        </>
    )
}

export default PopupFormEditProfile;