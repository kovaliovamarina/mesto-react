import React from 'react';
import { url, token } from '../utils/constans';
import Api from '../utils/Api';
import Cards from './Cards';

function Main(props) {

    const api = new Api({
        baseUrl: url,
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        }
    });

    const [userName, setUserName] = React.useState('');
    const [userDescription, setuserDescription] = React.useState('');

    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                //userProfile.setUserInfo(res.name, res.about, res._id); // данные прользователшя
                // debugger
                setUserName(res.name);
                setuserDescription(res.about);
                // userProfile.setUserAvatar({ avatar: res.avatar }); // фотография пользователя
                setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log(`Ошибка загрузки пользовательских данных:` + err);
            });

        // загрузка карточек с сервера
        api.getInitialCards()
            .then((res) => {
                // cardList.renderer(res);
                setCards(res);
            })
            .catch((err) => {
                console.log(`Ошибка загрузки карточек:` + err);
            });
    }, [])

    return (

        <main>
            <section className="profile page__container">
                <div className="profile__info">
                    <div className="profile__photo" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
                    <div className="profile__data">
                        <h1 className="profile__data-name">{userName}</h1>
                        <button className="profile__edit-button" aria-label="Редактировать" type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__data-job">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" aria-label="Добавить" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements page__container">
                {cards.map((cardId) => {
                    return (
                        <Cards key={cardId._id} card={cardId} onCardClick={props.onCardClick} onDeletePlace={props.onDeletePlace} />
                    )
                })}
            </section>
        </main >
    );
}

export default Main;