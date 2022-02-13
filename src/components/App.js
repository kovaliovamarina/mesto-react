import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupFormEditProfile from './PopupForm/PopupFormEditProfile';
import PopupFormEditAvatar from './PopupForm/PopupFormEditAvatar';
import PopupFormAddPlace from './PopupForm/PopupFormAddPlace';
import ImagePopup from './ImagePopup'

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditProfileClick() {
        // document.querySelector('.popup_type_profile').classList.add('popup_opened');
        setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        // document.querySelector('.popup_type_card-add').classList.add('popup_opened');
        setIsAddPlacePopupOpen(true);
    }
    function handleEditAvatarClick() {
        // document.querySelector('.popup_type_avatar').classList.add('popup_opened');
        setIsEditAvatarPopupOpen(true);
    }
    function handleDeletePlaceClick() {
        // document.querySelector('.popup_type_delete').classList.add('popup_opened');
        setIsDeletePopupOpen(true);
    }
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsDeletePopupOpen(false);
        setSelectedCard(null);
    }
    function handleCardClick(card) {
        // debugger
        setSelectedCard(card)
    }
    return (
        <>
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onDeletePlace={handleDeletePlaceClick}
                onCardClick={handleCardClick}
            />
            <Footer />

            <PopupWithForm title="Редактировать профиль" name="formEdit" openPopup={isEditProfilePopupOpen} closePopup={closeAllPopups} buttonTitle="Сохранить" disabled>
                <PopupFormEditProfile />
            </PopupWithForm>
            <PopupWithForm title="Новое место" name="formCreate" openPopup={isAddPlacePopupOpen} closePopup={closeAllPopups} buttonTitle="Сохранить" disabled>
                <PopupFormAddPlace />
            </PopupWithForm>
            <PopupWithForm title="Обновить аватар" name="formAvatar" openPopup={isEditAvatarPopupOpen} closePopup={closeAllPopups} buttonTitle="Сохранить" disabled>
                <PopupFormEditAvatar />
            </PopupWithForm>
            <ImagePopup name="picture" openPopup={selectedCard} closePopup={closeAllPopups} />
            <PopupWithForm title="Вы уверены?" name="formDelete" openPopup={isDeletePopupOpen} closePopup={closeAllPopups} buttonTitle="Да">
            </PopupWithForm>
        </>
    )
}

export default App;