import React from "react";

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);

    }
    return (
        <div className="element">
            <img className="element__img " src={props.card.link} onClick={handleClick} alt={props.card.name} />
            <button className="element__delete-button" aria-label="Удалить " type="button" onClick={props.onDeletePlace}></button >
            <div className="element__content ">
                <h2 className="element__text ">{props.card.name}</h2>
                <div className="element__like">
                    <button className="element__like-button " aria-label="Понравилось" type="button "></button>
                    <p className="element__like-number">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;