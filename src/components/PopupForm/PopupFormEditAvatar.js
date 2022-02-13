import React from "react";

function PopupFormEditProfile() {
    return (
        <>
            <input className="popup__input popup__input_text_link-avatar" id="urlAvatar" type="url" placeholder={"Адрес картинки"} name="avatar" required />
            <span className="popup__error" id="urlAvatar-error">Введите адрес картинки.</span>
        </>
    )
}
export default PopupFormEditProfile;