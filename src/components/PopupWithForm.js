import React from 'react';

function PopupWithForm(props) {
    // debugger
    return (
        <div className={`popup popup_type_${props.name} ${props.openPopup ? 'popup_opened' : ''} page__container`}>
            <div className="popup__container" >
                <button className="popup__close-button" aria-label="Закрыть" type="button" onClick={props.closePopup}></button>
                <form className="popup__form" name={`${props.name}`} >
                    <h2 className="popup__info">{props.title}</h2>
                    {props.children}
                    {/* <button className="popup__button" name="saveEdit" aria-label="Сохранить" type="submit" disabled>Сохранить</button> */}
                    <button className="popup__button" aria-label={props.buttonTitle} type="submit">{props.buttonTitle}</button>
                </form>
            </div>
        </div >

    )

}

export default PopupWithForm;